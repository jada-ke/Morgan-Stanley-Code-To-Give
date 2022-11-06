import React, {Component} from "react";
import MaterialTable from "material-table";
import { ICTableRow } from "./ICTableElements";

export const ICTable = ({realData}) =>{
    const data = [
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
        { title: "Mock Challenge", author: "Mock Author", description: "Mock Description", localisation: "Mock Localisation", upvotes: 33},
    ];
    const columns = [
        {
            render: (row) => { <ICTableRow rowData={row}/>  }
        }
    ];
    return(
        <MaterialTable title="Test Table" columns={columns} data={data}/>
    )
}