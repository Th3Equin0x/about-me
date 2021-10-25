import React from 'react';

export default function ProfessionalExperience(){
    return(
        <div className="card" style={{textAlign:"left", padding:"1em", minWidth:"20em"}}>
            <h2 className="card-title" style={{textAlign:"left"}}>Professional Experience</h2>
            <div className="card-body">
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Revature</h4><h5>2020-05 - 2020-09</h5>
                </span>
                <p className="card-text" style={{textAlign:"left", marginLeft:"1em"}}>
                    I completed a full-stack engineer "bootcamp" with Revature where I gained experience developing multi-tiered web applications. Created responsive React webpages connected to databases via Spring Data servers. Deployed web-hosted databases and servers using Amazon Web Services' RDS and EC2 technologies.
                </p>
                <ul className="card-text">
                    <li>Structured HTML documents and stylized them with CSS and Bootstrap.</li>
                    <li>Dynamically manipulated HTML pages with JavaScript and TypeScript.</li>
                    <li>Connected front-end NodeJS applications to back-end servers with AJAX.</li>
                    <li>Set up responsive back-end server applications with Spring MVC.</li>
                    <li>Connected back-end server applications to databases with Hibernate and Spring Data.</li>
                    <li>Implemented automated testing of applications via Jest and JUnit.</li>
                    <li>Created and maintained PostgreSQL databases with Postgres DB.</li>
                </ul>
                
                <span style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Infosys Ltd</h4><h5>2020-09 - 2021-10</h5>
                </span>
                <p className="card-text" style={{textAlign:"left", marginLeft:"1em"}}>
                    I worked in a Java developer role for various client companies, gaining experience in a variety of teams, workflows, and tech-stacks. My experience focused on web applications, with emphasis on the Spring framework for application setup and Hibernate for database connectivity. Collaborated with other developers, supervisors, and project owners within the Agile Scrum framework.
                </p>
                <ul className="card-text">
                    <li>Joined and adjusted to various teams and workflows.</li>
                    <li>Developed microservices using Java and Spring Boot.</li>
                    <li>Managed application dependencies and build cycles with Apache Maven. </li>
                    <li>Collaborated on web application projects remotely using Git.</li>
                    <li>Took part in Agile Scrum ceremonies remotely through video conferencing. </li>
                    <li>Earned internal certifications for Java development and the Agile framework.</li>
                </ul>
            </div>
        </div>
    )
}
