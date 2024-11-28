import React from 'react';

const CtrFormater = () => {
    const generateTable = () => {
        const text = document.getElementById('caseDetails').value.trim();
        
        const lines = text.split('\n');
        let introText = '';
        const caseData = {};
        let valueSectionStarted = false;
        
        // Take the first line as the subject (email subject)
        const subjectLine = lines[0]; 
        let bodyContent = lines.slice(1);  // Everything after the first line will be used in the table
        
        bodyContent.forEach(line => {
            if (!valueSectionStarted && line.includes(':')) {
                valueSectionStarted = true;
            }
            if (!valueSectionStarted) {
                introText += line + '\n';
            } else if (valueSectionStarted && line.includes(':')) {
                const [key, ...valueParts] = line.split(':');
                const value = valueParts.join(':').trim();
                caseData[key.trim()] = value;
            }
        });

        let introHtml = `<div class="intro-text">${introText.trim().replace(/\n/g, '<br>')}</div>`;
        let tableHtml = `
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-family: Arial, sans-serif;">
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background-color: rgba(50, 50, 50, 0.7); text-align: left; color: #fff; font-weight: bold;">
                        Field
                    </th>
                    <th style="border: 1px solid #ddd; padding: 8px; background-color: rgba(50, 50, 50, 0.7); text-align: left; color: #fff; font-weight: bold;">
                        Details
                    </th>
                </tr>`;
        for (const [key, value] of Object.entries(caseData)) {
            tableHtml += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${key}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${value}</td>
                </tr>`;
        }
        tableHtml += '</table>';

        document.getElementById('tableContainer').innerHTML = introHtml + tableHtml;

        // Pass the first line as the subject
        return subjectLine;
    };
 const copyToClipboard = () => {
        
    const range = document.createRange();
    range.selectNode(document.getElementById('tableContainer'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Table copied to clipboard!');

    };
    // Function to trigger the mailto action with plain text content
    const sendEmail = () => {
        const subjectLine = generateTable(); // Get the first line to use as the subject
        const tableContent = document.getElementById('tableContainer').innerText; // Get plain text version of the table
        const subject = encodeURIComponent(subjectLine); // Use the subject line from the pasted text

        // Format the table content for plain text
        let body = `Case Transfer Request for:\n\n${tableContent}`;

        const toAddress = "TechnicalSupport_Operations-AMR@soti.net"; // Recipient's email
        copyToClipboard();
        // Create a mailto link and open the email client with pre-filled content
        const mailtoLink = `mailto:${toAddress}?subject=${subject}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="ctrf">
            <nav>
                <h1>Case Details Formatter</h1>
            </nav>
           
                <textarea rows="15" cols="100" id="caseDetails" placeholder="Enter the Case Transfer Details" type="text" />
           <div>
            <button type="button" onClick={generateTable}>Generate Table</button>
            <button type="button" style={{margin:10}} onClick={sendEmail}>Send via Email</button> </div>
            <div id="tableContainer"></div>
        </div>
    );
};

export default CtrFormater;
