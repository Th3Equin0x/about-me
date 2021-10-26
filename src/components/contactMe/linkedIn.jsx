import React from 'react';

export default function LinkedIn(){
    return(
        <React.Fragment>
            <a href="https://www.linkedin.com/in/stephengruver/" target="_blank" rel="noreferrer">
                <img style={{float:"left", objectFit:"contain", display:"block", marginRight:"1em", maxHeight:"10em", minHeight:"21px", width:"auto"}} src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Logo-TM.png" title="https://www.linkedin.com/in/stephengruver/" alt="Visit my LinkedIn to get in touch with me!"/>
            </a>
            <div className="card" style={{textAlign:"left", padding:"1em", minHeight:"10em", minWidth:"16em"}}>
                <h2 className="card-title">Connect with Me on LinkedIn!</h2>
                <p className="card-body">The most welcome way for new contacts to reach out to me is via LinkedIn. Click the LinkedIn logo to visit my LinkedIn page and send me a DM or connection request!</p>
            </div>
        </React.Fragment>
    );
}