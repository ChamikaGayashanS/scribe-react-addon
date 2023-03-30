/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global Word, require */
// eslint-disable-next-line no-redeclare
/* global console, require */
import { DefaultButton } from "@fluentui/react";
import React from "react";


const adddata = () => {
    return Word.run(async (context) => {
        const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);

        paragraph.font.color = "blue";

        await context.sync();
    });
};

const addHtmlTag = () => {
    return Word.run(async (context) => {

        const body = context.document.body;
        body.insertHtml(
            "<img src='https://firebasestorage.googleapis.com/v0/b/scribe-it-admin-web.appspot.com/o/media%2FScreenshot%20(44).png?alt=media&token=fb45a2da-05eb-41d4-a826-9ecad7cdff18'>", Word.InsertLocation.start);
        await context.sync();
        console.log('HTML added to the beginning of the document body.');
    });

}
const addHeaderTag = () => {
    return Word.run(async (context) => {

        const header = context.document.sections.getFirst().getHeader("Primary");
        header.insertHtml(
            "<img src='https://firebasestorage.googleapis.com/v0/b/scribe-it-admin-web.appspot.com/o/media%2FScreenshot%20(44).png?alt=media&token=fb45a2da-05eb-41d4-a826-9ecad7cdff18'>", Word.InsertLocation.start);
        await context.sync();
        console.log('HTML added to the beginning of the document body.');
    });

}

function AddData() {
    return <div className="add-content">
        <h1>Add Data</h1>
        <p>Insert Text</p>
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={adddata}>
            Insert Text
        </DefaultButton>
        <br />
        <p>Insert Image</p>
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={addHtmlTag}>
            Insert Html Image
        </DefaultButton>
        <br />
        <p>Insert header</p>
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={addHeaderTag}>
            Insert Header
        </DefaultButton>
        <br />
        <br />

    </div>;
}

export default AddData;
