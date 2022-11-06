import React from "react";

export const ICTableRow = ({rowData}) => {
    return (
        <>
            <div>{rowData.title}</div>
            <div>Localisation:{rowData.localisation}</div>
            <div>{rowData.description}</div>    
            <div>{rowData.upvotes}</div> 
        </>
    );
}


