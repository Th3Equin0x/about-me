import React from 'react';
import AcademicsExperience from './academicsExperience';
import Introduction from './intro';
import ProfessionalExperience from './professionalExperience';
import Certifications from './certifications';
import {useDispatch} from 'react-redux';
import {updateTab} from '../../actions';

export default function AboutMe(){
    const dispatch = useDispatch();
    dispatch(updateTab("home"));

    return(
        <div style={{backgroundColor:"#93C9F9", padding:"1%", minWidth:"20em"}}>
            <Introduction />
            <br/>
            <AcademicsExperience />
            <br/>
            <ProfessionalExperience />
            <br />
            <Certifications />
        </div>
    )
}