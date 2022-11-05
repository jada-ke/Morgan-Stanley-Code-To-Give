import React from "react";
import {Button} from './ButtonElement';

const Button = (props) => {
    return (
        <Button className= "button-container" onClick = {props.onClick}>
            {props.title}
        </Button>
    );
}
export default Button