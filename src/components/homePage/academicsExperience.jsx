import React from 'react';

export default function AcademicsExperience(){
    return (
        <div className="card" style={{textAlign:"left", padding:"1em", minWidth:"16em"}}>
            <h2 className="card-title" style={{textAlign:"left"}}>Education</h2>
            <div className="card-body">
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Elgin Community College</h4><h5>2016-08 - 2018-05</h5>
                </span>
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <p className="card-text" style={{textAlign:"left", marginLeft:"2em"}}>Associate's, Engineering</p><p>President's List</p>
                </span>
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Bradley University</h4><h5>2018-08 - 2020-05</h5>
                </span>
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <p className="card-text" style={{textAlign:"left", marginLeft:"2em"}}>Bachelor of Science, Computer Science</p><p>Summa cum Laude</p>
                </span>
            </div>
        </div>
    );
}