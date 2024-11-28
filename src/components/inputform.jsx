import React from 'react'
import { Link } from 'react-router-dom';

const openLink = () => {    
      window.open("https://soti.sharepoint.com/:u:/s/AWStoAzureMigration/EfzuzoSKY7hOrwAq-x6Hjf4BgyjfUR5pDYmk6rtM1B4jlw?e=i6dUFQ");


}
const Inputform = () => {
  const copyText = (elementId) => {
     var textToCopy = document.getElementById(elementId).innerText;

// Replace HTML line breaks with plain text line breaks
var plainTextLineBreaks = textToCopy.replace(/<br>/g, '\n');

// Create a temporary textarea element and set its value
var tempTextarea = document.createElement("textarea");
tempTextarea.innerHTML = plainTextLineBreaks;
document.body.appendChild(tempTextarea);

// Select and copy the text
tempTextarea.select();
document.execCommand("copy");

// Remove the temporary textarea element
document.body.removeChild(tempTextarea);



      

  } ; 
  const extraction = () => {
    const inputtext = document.getElementById("textinput").value;
    const words = inputtext.split(/\s+/);

    const swords = words.filter(word => word.toLowerCase().startsWith('s') && /\d/.test(word.slice(1)));
    const awords = words.filter(word => word.toLowerCase().startsWith('a') && /\d/.test(word.slice(1)));

    const awsid = swords.map(word => word.slice(0, 7)).join(", ");
    const azureid = awords.map(word => word.slice(0, 8)).join(", ");

    document.getElementById("azuredisplaytext").innerText = `We will begin the AWS to Azure migration to your Cloud Instance ${awsid} within the next five minutes. \n \n Please note that your access to MobiControl, and device connectivity, will be impaired for the duration of the migration. \n \n I will keep you updated on any major changes and email you once the migration is complete.\n \n Thank you for choosing SOTI.`;
    document.getElementById("awsdisplaytext").innerText = `Hi Team, \n \n  All services have been stopped and the server has been put in maintenance for the server ${awsid}\n \n Kindly proceed with migration`;
    document.getElementById("script1").innerText = "UPDATE dbo.devinfo \n set online = '0'\nwhere online = '1'; \n UPDATE dbo.ServerInfo\nset SrvStatus = '4';\nUPDATE dbo.MSInfo\nset Status = '4';\nGO"
  document.getElementById("complete").innerText ="Hi All, \n We have performed the migration activity for the server " + awsid + " and it is completed successfully. \n \n The XSight and Mobicontrol has been installed successfully and all the services are running up and fine. \n \n  I have also informed the customer about the activity completion and forwarded the SOTI Identity steps."
  document.getElementById("cxurl").innerText ="Thank you for your patience and co-operation.\n \n The migration has been completed with success and everything is working fine.\nKindly check at your end once and confirm back to us. \n \n  Use this new URL - https://"+azureid+".mobicontrol.cloud/MobiControl/WebConsole/?nosso=true"
  document.getElementById("cxidentity").innerText ="Thank you for your patience. \n \n The migration has been completed with success and everything is working fine.\nKindly check at your end once and confirm back to us.\n \n If you have identity on your server, please check if you have followed these steps. \n \n To login to the new environment, please follow the steps below to update your SOTI Identity and access MobiControl:\n \n  1. Login to Identity \n 2. Click on the top left menu > Applications \n 3. Select the current Identity App MobiControl-" + awsid + "\n  4. Click on the Pencil icon below (Edit) \n 5. Change Application Name to MobiControl-"+ azureid + "\n 6. Update the FQDN part in SAML Audience, SAML Consumer URL, Recipient and Log Out URL from " + awsid + ".mobicontrolcloud.com to " + azureid +".mobicontrol.cloud \n \n This completes the Identity update \n If there is other IDP integration with MobiControl, you will need to upload the new MobiControl metadata to your IDP. \n \n Please let me know if you are facing any issues"
  document.getElementById("script2").innerText ="https://soti.sharepoint.com/:u:/s/AWStoAzureMigration/EfzuzoSKY7hOrwAq-x6Hjf4BgyjfUR5pDYmk6rtM1B4jlw?e=i6dUFQ"
  };
  return (
    
    <div>
       <div className='navs'>
        <nav>
      <h1>AWS to Azure Migration Helper</h1>
      <p>Crafted by savio.sabu@soti.net</p>
      </nav>

      </div>
      
      <form action="">
      <label htmlFor="textinput">Enter the Azure and AWS ID</label>
      <input type="text" id='textinput' placeholder='A123456, S123456'/>
      <button type="button" onClick={extraction}>Display Text</button>
      </form>

      <div>
      <div class="cxmail">

<h3>Initial Mail to Customer</h3>
<p id="azuredisplaytext"></p>
<button onClick={() => copyText('azuredisplaytext')}>Copy</button>
</div>


<div class="cloudinitial">
<h3>Cloud Team Migration Initiaion mail</h3>
<p id="awsdisplaytext"></p>
<button onClick={()=> copyText('awsdisplaytext')}>Copy</button>
</div>


<div class="script1">
<h3>SSMS Script 1</h3>
<p id="script1"></p>
<button onClick={()=> copyText('script1')}>Copy</button>
</div>


<div class="script2">
<h3>SSMS Script 2</h3>
<p id="script2"></p>
<button onclick=""><a style={{color:'white'}} id="linktag" href="https://soti.sharepoint.com/:u:/s/AWStoAzureMigration/EfzuzoSKY7hOrwAq-x6Hjf4BgyjfUR5pDYmk6rtM1B4jlw?e=i6dUFQ">Open Script 2</a></button>
</div> 

<div class="complete">
<h3>Migration Complete Official mail</h3>
<p id="complete"></p>
<button onClick={()=>copyText('complete')}>Copy</button>
</div>


<div class="cxurl">
<h3>Cx Login Url Mail </h3>
<p id="cxurl"></p>
<button onClick={()=>copyText('cxurl')}>Copy</button>
</div>


<div class="cxidentity">
<h3>Cx Identity Configuration Mail</h3>
<p id="cxidentity"></p>
<button onClick={()=>copyText('cxidentity')}>Copy</button>
</div>




<Link className="sticky-button" to="/ctrFormatter">Switch to Case Details Formatter</Link>

    </div>

    </div>
  )
}

export default Inputform


  





    