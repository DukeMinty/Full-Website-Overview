import React from "react";

import { useNavigate } from "react-router-dom";


function About(){






    return(
        <div className = "aboutContainer">
                <h1 className = "aboutHeader">About This Website</h1>
                <p className = "aboutPara">
                    This website was created by Aaron Trebus, Joshua Jenkins, Trisha Samala, and Henry Clark for our <span className = "courseTitle">Web Application Development 1</span> final project.
                    It uses techniques learned in this class and elsewhere to allow users to make posts, ideally recipes. These posts are stored inside a mySQL database that is acessed using the Axios library, allowing frontend users to view and create posts.
                    The frontend is created using React.
                </p>
                <p className = "whenPublished">May 2024</p>
        </div>
    )
}

export default About;