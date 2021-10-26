import React from 'react';

export default function Certifications(){
    return (
        <div className="card" style={{textAlign:"left", padding:"1em", minWidth:"16em"}}>
            <h2 className="card-title" style={{textAlign:"left"}}>Certifications</h2>
            <div className="card-body">
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Oracle Certified Associate, Java SE 8 Developer</h4><h5>2021-04</h5>
                </span>
                <a href="https://www.credly.com/badges/b4319fa8-3cec-42a0-9dc2-75540034efb9" target="_blank" rel="noreferrer"><p className="card-text" style={{textAlign:"left", marginLeft:"2em"}}>View on Credly</p></a>
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>HackerRank Problem Solving (Basic) Certificate</h4><h5>2020-11</h5>
                </span>
                <a href="https://www.hackerrank.com/certificates/71d4de0d101d" target="_blank" rel="noreferrer"><p className="card-text" style={{textAlign:"left", marginLeft:"2em"}}>View on HackerRank</p></a>
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>HackerRank Java (Basic) Certificate</h4><h5>2020-10</h5>
                </span>
                <a href="https://www.hackerrank.com/certificates/d94926242f01" target="_blank" rel="noreferrer"><p className="card-text" style={{textAlign:"left", marginLeft:"2em"}}>View on HackerRank</p></a>
            </div>
        </div>
    );
}