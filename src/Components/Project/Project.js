import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Project.css'

const Project = ({ myProject }) => {
    const { id, name, img1, img2, img3, description, website, sourceCode } = myProject;

    return (
        <>
            <div class="project card bg-secondary">

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                </div>
                <p class="card-text">{description}</p>
                <div className=" card-body">
                    <a className="me-5" href={sourceCode} target="blank"><button className="btn btn-info">Github</button></a>
                    <a href={website} target="blank"><button className="btn btn-info">Live Site</button></a>
                </div>
            </div>
        </>
    );
};

export default Project;