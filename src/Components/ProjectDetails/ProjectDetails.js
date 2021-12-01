import React from 'react';



const ProjectDetails = ({ myProject }) => {
    const { id, name, description, technology, img1, img2, img3 } = myProject;
    return (
        <div>
            <h3>Details of: {name}</h3>
        </div>
    );
};

export default ProjectDetails;