import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    return(
        <main>
            {
                posts.map((props) => (
                        <Article key = {props.id}
                        title = {props.title}
                        date ={props.date}
                        preview ={props.preview}/>
                   
                ))}
        </main>
    )
}

export default ArticleList;