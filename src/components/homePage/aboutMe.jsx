import React from 'react';
import AcademicsExperience from './academicsExperience';
import Introduction from './intro';
import ProfessionalExperience from './professionalExperience';

export default function AboutMe(){
    return(
        <div style={{backgroundColor:"#93C9F9", padding:"1%", minWidth:"20em"}}>
            <Introduction />
            <br/>
            <AcademicsExperience />
            <br/>
            <ProfessionalExperience />
        </div>
    )
}