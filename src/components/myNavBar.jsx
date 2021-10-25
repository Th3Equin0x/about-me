import React from 'react';
import {Link} from 'react-router-dom';

export default function MyNavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{minWidth:"20em"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Stephen Gruver</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/contact">Contact Me</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}