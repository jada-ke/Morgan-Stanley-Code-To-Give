import React, {Component} from "react";
import FilterTab from "./FilterTab";
import Demo from '../Map/demo';
export class ICTable extends Component{
     state = {
            city : '',
            postal_code : '',
            country : ''
        }
    handleCallback = (childData) =>{
        
        this.state = childData
        this.props.parentCallback(this.state);
 }
    render() {
        
        
        var items = this.props.ic
        if(items.length>3){
            items=[items[0],items[1],items[2]]
        }
        return(
            <>
            <FilterTab parentCallback = {this.handleCallback}></FilterTab>
            <hr></hr>
            <h2 className="m-3"> Featured </h2>
            {items.map(item =>
                <div className="m-3">
                    <Demo item={item}/>
                </div>
            )}
            </>
        )
    }
}

export default ICTable