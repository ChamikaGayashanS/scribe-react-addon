/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global Word, window, Office, require */
// eslint-disable-next-line no-redeclare
// /* global console, require */
import React from 'react'
const addHtmlTag = (val: any) => {
    return Word.run(async (context) => {

        const body = context.document.body;

        body.clear();
        body.insertText(
            val.target.value, "End");
        await context.sync();
    });

}
function ParaInput() {
    return (
        <div>
            <textarea placeholder='Enter Something....' className='text-input' onChange={addHtmlTag} />
        </div>
    )
}

export default ParaInput