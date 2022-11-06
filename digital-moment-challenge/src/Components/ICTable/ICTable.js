import React, {Component} from "react";

export class ICTable extends Component{
    
    render() {
        const items = this.props.ic
        return(
            <>
            <FilterTab></FilterTab>
            {items.map(item =>
                <div>
                    item.id
                </div>
            )}
            </>
        )
    }
}