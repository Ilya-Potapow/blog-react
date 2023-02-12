import React from 'react'
import { getPagesArr } from '../../../utils/pages'
import Button from '../button/Button'


const Pagination = ({totalPages, currPage, changePage}) => {
    let pagesArr = getPagesArr(totalPages)
  return (
     <div className="page_wrapper">
        {pagesArr.map((p, i) => (
          <Button
            onClick={() => changePage(p)}
            className={p === currPage ? "page page_current" : "page"}
            key={i}>{p}
          </Button>
        ))}
      </div>
  )
}

export default Pagination