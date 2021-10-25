import React from 'react';

export default function Introduction(){
    return(
        <React.Fragment>
            <img style={{float:"left", marginRight:"1em", border:"0.2em solid #0863B2", objectFit:"contain", display:"block", minWidth:"16em", height:"auto", maxWidth:"20em", minWidth:"20em"}} src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/186459698_4076700469109800_2113304776499037631_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p84rVQSjsOMAX-0bTR-&_nc_ht=scontent-atl3-2.xx&oh=86dc711e7352e28570eba45ef9e5ef8a&oe=619E0BA6" title="Stephen Gruver" alt="A headshot of Stephen"></img>
            <div className="card" style={{textAlign:"left", padding:"1em", minHeight:"20em", minWidth:"16em"}}>
                <h2 className="card-title">Welcome to my Online Resume!</h2>
                <p className="card-body">Hi, I'm Stephen Gruver. I am a young software developer with a passion for video games living in Illinois. I graduated from Bradley University Summa cum Laude in 2020, gained full-stack software engineering experience under Revture's rigorous training program, and worked in a Java development position for Infosys for a year. I am currently seeking my next opportunity and am focusing on positions where I can continue gaining full-stack software engineering experience in a professional environment.</p>
                <p className="card-body">Please see the <b>"Contact Me"</b> tab if you would like to get in touch!</p>
            </div>
        </React.Fragment>
    );
}