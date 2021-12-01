import React from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetails = ({ myProject }) => {
    // const { id } = useParams();
    const { name, description, technology, img1, img2, img3 } = myProject;
    return (
        <div>
            <h3>Details of: {name}</h3>
        </div>
    );
};

export default ProjectDetails;