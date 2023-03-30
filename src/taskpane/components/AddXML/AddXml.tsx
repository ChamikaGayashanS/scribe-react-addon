/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global Word, require */
// eslint-disable-next-line no-redeclare
/* global console, require */
import { DefaultButton } from '@fluentui/react'
import React, { useState } from 'react'
import { getDocument } from '../../helpers/FirebaseFunctions';
import { IFile } from '../../helpers/Interfaces';

function AddXml() {

    const [file, setFile] = useState({} as IFile);

    const RetriveDocument = async () => {
        await getDocument("0001", setFile);
    }


    const addDocument = async () => {
        RetriveDocument();
        console.log(file);

        await Word.run(async (context) => {
            const header = context.document.sections.getFirst().getHeader("Primary");
            const body = context.document.body;
            const footer = context.document.sections.getFirst().getFooter("Primary");
            header.insertOoxml(
                file.headerXml
                , Word.InsertLocation.end
            );
            body.insertOoxml(
                file.bodyXml
                , Word.InsertLocation.end
            );
            footer.insertOoxml(
                file.footerXml
                , Word.InsertLocation.end
            );
            context.trace('document upgrade successful');
            return context.sync();
        }).catch((e: any) => {
            console.log(e, "Exception");
        });

    }


    return (
        <div >
            <h1>Add Document from firebase</h1>

            <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={addDocument}>
                Insert Document
            </DefaultButton>
            {/* <br />
            <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={addBodyXML}>
                Insert Body XML
            </DefaultButton>
            <br />
            <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={addDocument}>
                Load Word Document
            </DefaultButton>
            <br /> */}
        </div>
    )
}

export default AddXml