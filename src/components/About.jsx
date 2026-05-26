import React from "react";

function About (props){
    return (
            <aside>
                <img src={props.imageUrl} alt="blog logo" width={400} height={250} />
                <p>{props.about}</p>
            </aside>
    )
}

export default About;