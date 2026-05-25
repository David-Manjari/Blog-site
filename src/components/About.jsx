import React from "react";

function About (props){
    return (
        <div>
            <img src={props.imageUrl } alt="blog logo" width={400} height = {250} />
            <p>{props.about}</p>
        </div>
    )
}

export default About;