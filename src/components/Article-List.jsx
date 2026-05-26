import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    return(
        <main>
            {
                posts.map((props) => (
                        <Article key = {props.id}
                        props = {props} />
                   
                ))}
        </main>
    )
}

export default ArticleList;