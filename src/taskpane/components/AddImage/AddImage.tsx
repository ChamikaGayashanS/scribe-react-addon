/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global Word, window, Office, require */
// eslint-disable-next-line no-redeclare
/* global console, require */
import { DefaultButton } from "@fluentui/react";
import React from "react";
import { addMedia } from "../../helpers/FirebaseFunctions";
import { toBase64 } from "../../helpers/HelperFunctions";

function AddImage() {
    let type = "" as "body" | "header" | "footer";
    const addHtmlTag = (link: string) => {
        return Word.run(async (context) => {

            const body = context.document.body;
            body.insertHtml(
                `<img src='${link}'>`, Word.InsertLocation.start);
            await context.sync();
            console.log('HTML added to the beginning of the document body.');
        });

    }

    const addHeaderTag = (link: string) => {
        return Word.run(async (context) => {

            const header = context.document.sections.getFirst().getHeader("Primary");
            header.insertHtml(
                `<img src='${link}'>`, Word.InsertLocation.start);
            await context.sync();
            console.log('HTML added to the beginning of the document body.');
        });

    }

    const addFooterTag = (link: string) => {
        return Word.run(async (context) => {

            const header = context.document.sections.getFirst().getFooter("Primary");
            header.insertHtml(
                `<img src='${link}'>`, Word.InsertLocation.start);
            await context.sync();
            console.log('HTML added to the beginning of the document body.');
        });

    }

    // window.onkeydown = function (e) {

    //     console.log(e);

    // }

    var doc = Office.context.document;
    doc.addHandlerAsync(Office.EventType.DocumentSelectionChanged, function (eventArgs: any) {
        console.log(eventArgs);
    });

    return <div>
        <input id="file-input" type={"file"} hidden onChange={async (val) => {
            await toBase64(val.target.files[0]).then(async (base64Url: any) => {
                await addMedia(base64Url, val.target.files[0].name).then((link) => {
                    if (type == "header") {
                        addHeaderTag(link);
                    } else if (type == "footer") {
                        addFooterTag(link)
                    } else {
                        addHtmlTag(link)
                    }
                });
            });
        }} />
        <h1>Add Images</h1>

        <br />
        <br />
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={() => { type = "body" }}>
            <label style={{ cursor: "pointer", fontWeight: "500" }} htmlFor="file-input">
                Add Image to Body
            </label>
        </DefaultButton>
        <br />
        <br />
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={() => { type = "header" }}>
            <label style={{ cursor: "pointer", fontWeight: "500" }} htmlFor="file-input">
                Add Image to Header
            </label>
        </DefaultButton>
        <br />
        <br />
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={() => { type = "footer" }}>
            <label style={{ cursor: "pointer", fontWeight: "500" }} htmlFor="file-input">
                Add Image to Footer
            </label>
        </DefaultButton>

    </div>;
}

export default AddImage;
