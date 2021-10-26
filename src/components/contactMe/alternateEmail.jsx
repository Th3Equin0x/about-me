import React from 'react';

export default function AlternateEmail(){
    return(
        <React.Fragment>
            <a href="https://www.linkedin.com/in/stephengruver/" target="_blank" rel="noreferrer">
                <img style={{float:"right", objectFit:"contain", display:"block", marginLeft:"1em", maxHeight:"10em", minHeight:"21px", width:"auto"}} src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/gmail_logo_icon.png" title="Gmail" alt="Send me an email!"/>
            </a>
            <div className="card" style={{textAlign:"left", padding:"1em", minHeight:"10em", minWidth:"16em"}}>
                <h2 className="card-title">Send Me an Email!</h2>
                <p className="card-body">My alternate email is <b>stephenmgruver@gmail.com</b>. Until I can implement a secure way to send an email to my primary inbox, please use that address if you wish to send me an email!</p>
            </div>
        </React.Fragment>
    );
}