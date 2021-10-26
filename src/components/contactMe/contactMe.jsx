import React from 'react';
import AlternateEmail from './alternateEmail';
import LinkedIn from './linkedIn';
import {useDispatch} from 'react-redux';
import {updateTab} from '../../actions';

export default function ContactMe(){
    const dispatch = useDispatch();
    dispatch(updateTab("contactMe"));

    return(
        <div style={{backgroundColor:"#93C9F9", padding:"1%", minWidth:"20em"}}>
            <LinkedIn />
            <br/>
            <AlternateEmail />
        </div>
    );
}