import React, { useEffect, useState } from 'react';
let numOFPage = 2;

const Paginatedtable = ({ data, DataInfo, additionFeild}) => {
  const [tableData , setTableData] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);
  const [pages , setPages] = useState([]);
  const [pageCount , setPageCount] = useState(1);
  
  useEffect(() => {
    let pCount = Math.ceil(data.length / numOFPage);
    setPageCount(pCount);
    let pArr = []
    for (let i = 1; i<= pCount; i++) pArr = [...pArr, i]
    setPages(pArr) 
  }, []);

  useEffect(() => {
    let start = (currentPage * numOFPage) - numOFPage
    let end = (currentPage * numOFPage) 
    setTableData(data.slice(start , end))
   
  }, [currentPage]);

    return (
        <>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        {DataInfo.map(i => (
                            <th key={i.feild}>{i.title}</th>
                        ))}
                        {
                            additionFeild ? (
                                <th>{additionFeild.title}</th>
                            ) :
                                null
                        }
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(t => (
                        <tr key={t.id}>
                            {DataInfo.map(i => (
                                <td key={i.feild + "_" + t.id}>{t[i.feild]}</td>
                            ))}
                            {
                                additionFeild ? (
                                    <td>{additionFeild.elements(t.id)}</td>
                                ) :
                                    null
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center"
            >
                <ul className="pagination dir_ltr">
                    <li className="page-item">
                        <span className={`page-link pointer ${currentPage == 1 ? "disbled" : ""}`}  aria-label="Previous" onClick={()=>setCurrentPage(currentPage - 1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>
                    {
                       pages.map(page =>(
                        <li className="page-item" key={page.id}>
                        <span className={`page-link pointer ${currentPage == page ? "alert-success" : ""}`} onClick={()=>setCurrentPage(page)}>
                            {page}
                        </span>
                        </li>
                       ))
                    }
                    <li className="page-item">
                        <span className={`page-link pointer ${currentPage == pageCount ? "disbled" : ""}`} aria-label="Next" onClick={()=>setCurrentPage(currentPage + 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Paginatedtable;
