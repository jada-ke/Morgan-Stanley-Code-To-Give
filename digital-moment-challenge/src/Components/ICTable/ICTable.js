import React, {Component,useState} from "react";
import FilterTab from "./FilterTab";

import Pagi from "./Pagi";


function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}

export class ICTable extends Component{
    
     state = {
            city : '',
            type : '',
            country : ''
        }
    handleCallback = (childData) =>{
        
        this.state = childData
        this.props.parentCallback(this.state);
 }
    render() {
        var items = this.props.ic
        
        var challenges = this.props.challenges
        var children = items.concat(challenges)
        children.sort(GetSortOrder("upvotes"));
        
        
        return(
            <>
            <FilterTab parentCallback = {this.handleCallback}></FilterTab>
            <hr></hr>
            <h2 className="m-3 text-center"> Results</h2>
            <Pagi parentToChild={children}/>
            
            
            </>
        )
    }
}

export default ICTable