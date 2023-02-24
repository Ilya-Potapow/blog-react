import React, { useEffect } from "react";
import { getPagesArr } from "../../../utils/pages";

import PaginationItem from "../paginationItem/PaginationItem";
import "./Pagination.css";

const Pagination = ({ totalPages, currPage, changePage }) => {
  let pagesArr = getPagesArr(totalPages);

  return (
    <div className="page_wrapper">
      {pagesArr.map((p, i) => (
        <PaginationItem
          onClick={()=> {
            changePage(p) 
            window.scrollTo({ top: 735 })
          }  
            }
          className={p === currPage ? "page page_current" : "page"}
          key={i}
        >
          {p}
        </PaginationItem>
      ))}
    </div>
  );
};

export default Pagination;
