import Pagination from "../Pagination/Pagination";
import Demo from '../Map/demo';
import React, {Component,useState, useMemo} from "react";



let PageSize =2;

export default function Pagi({parentToChild}) {

    console.log(parentToChild);
    const [currentPage, setCurrentPage] = useState(1);
    
        const currentTableData = useMemo(() => {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;

            console.log(parentToChild);
            return parentToChild.slice(firstPageIndex, lastPageIndex);
        }, [currentPage,parentToChild]);
        return (
            <>
            <div>
            {currentTableData.map(item =>
                <div className="m-3">
                    <Demo item={item}/>
                </div>
            )}
            </div>
            
        <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={parentToChild.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />
        </>
        );

}

