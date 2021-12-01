import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Project.css'

const Project = ({ myProject }) => {
    const { id, name, img1 } = myProject;

    return (
        <>
            <div class="project card">
                <img src={img1} width="250px" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                </div>
                <Link to={`/projectDetails/${id}`}>
                    <Button className="btn btn-info">Details</Button>
                </Link>
            </div>
            <ProjectDetails
                key={myProject.id}
                myProject={myProject}
            ></ProjectDetails>
        </>
    );
};

export default Project;