import React from 'react';
import AlternateEmail from './alternateEmail';
import LinkedIn from './linkedIn';

export default function ContactMe(){
    return(
        <div style={{backgroundColor:"#93C9F9", padding:"1%", minWidth:"20em"}}>
            <LinkedIn />
            <br/>
            <AlternateEmail />
        </div>
    );
}