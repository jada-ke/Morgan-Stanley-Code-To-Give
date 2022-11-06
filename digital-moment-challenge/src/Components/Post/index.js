import React from "react";
import {Button} from "./Button/index"
import styles from "./PostElement.css";

const PostElement = () => {
    return (
        <div class= "wrapper">
            <div class = "box a">
                 <Button >Upvote </Button>
            </div>
            <div class = "box b"> 
                <Button> Downvote</Button>
            </div>
            <div class = "box c"> thread name</div>
            <div class = "box d"> Username/publish time</div>
            <div class = "box e"> 
                <Button>Suscribe</Button>
            </div>
            <div class = "box f"> Post text</div>
            <div class = "box g"> 
                <Button>Like</Button>
            </div>
            <div class = "box h"> 
                <Button>Comment</Button>
            </div>
            <div class = "box i"> Extra</div>
        </div>
    )
}

export default PostElement


