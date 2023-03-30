/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global Word, require */
// eslint-disable-next-line no-redeclare
// /* global console, require */
import { DefaultButton } from "@fluentui/react";
import React from "react";
import { addDocument } from "../../helpers/FirebaseFunctions";
import { IFile } from "../../helpers/Interfaces";



function RetrieveData() {

    const saveDocument = async (file: IFile) => {
        await addDocument("0001", file);
    }

    async function getWordDocument() {
        await Word.run(async (context) => {
            const header = context.document.sections.getFirst().getHeader("Primary").getOoxml();
            const body = context.document.body.getOoxml();
            const footer = context.document.sections.getFirst().getFooter("Primary").getOoxml();
            await context.sync();
            saveDocument({
                fileName: "test file",
                headerXml: header.value.toString(),
                bodyXml: body.value.toString(),
                footerXml: footer.value.toString()
            });
        });
    }

    return <div className="editor-content">
        <h1>Save Data</h1>

        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={getWordDocument}>
            Save Document
        </DefaultButton>
        <br />
    </div>;
}

export default RetrieveData;
