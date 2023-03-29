/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global Word, require */
// eslint-disable-next-line no-redeclare
/* global console, require */
import { DefaultButton } from "@fluentui/react";
import React, { useState } from "react";



function RetrieveData() {
    const [headerData, setheaderData] = useState("");


    const getHeader = () => {
        setheaderData("Loading Header")
        return Word.run(async (context) => {
            const header = context.document.sections.getFirst().getHeader("Primary").getOoxml();
            await context.sync();
            console.log(header, "header");
            // eslint-disable-next-line office-addins/load-object-before-read
            setheaderData(header.value)
        });

    }
    const getBody = () => {
        setheaderData("Loading Body")
        return Word.run(async (context) => {
            const body = context.document.body.getOoxml();
            await context.sync();
            console.log(body, "body");
            // eslint-disable-next-line office-addins/load-object-before-read
            setheaderData(body.value)
        });

    }
    return <div className="editor-content">
        <h1>Retrieve Data</h1>

        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={getHeader}>
            Get Header
        </DefaultButton>
        <br />
        <br />
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={getBody}>
            Get Body
        </DefaultButton>
        <br />
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={() => { setheaderData("") }}>
            Clear
        </DefaultButton>
        <br />

        <div className="editor" contentEditable>{headerData}</div>
    </div>;
}

export default RetrieveData;
