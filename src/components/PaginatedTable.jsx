import React, { useEffect, useState } from 'react';


const Paginatedtable = ({ children, data, DataInfo, additionFeild, searchParams , numOFPage }) => {
  const [initData, setInitData] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchCarected, setSearchCarected] = useState("");

  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOFPage);
    setPageCount(pCount);
    let pArr = []
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i]
    setPages(pArr)
  }, [initData]);

  useEffect(() => {
    let start = (currentPage * numOFPage) - numOFPage
    let end = (currentPage * numOFPage)
    setTableData(initData.slice(start, end))

  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(data.filter(d => d[searchParams.searchFeild].includes(searchCarected)))
    setCurrentPage(1)
  }, [searchCarected]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e) => setSearchCarected(e.target.value)}
            />
            <span className="input-group-text">{searchParams.title}</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
          {/* <Addcategory/> */}
        </div>
      </div>

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
      {
        pages.length > 1 ? (
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            <ul className="pagination dir_ltr">
              <li className="page-item">
                <span className={`page-link pointer ${currentPage == 1 ? "disbled" : ""}`} aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                  <span aria-hidden="true">&raquo;</span>
                </span>
              </li>
              {
                pages.map(page => (
                  <li className="page-item" key={page}>
                    <span className={`page-link pointer ${currentPage == page ? "alert-success" : ""}`} onClick={() => setCurrentPage(page)}>
                      {page}
                    </span>
                  </li>
                ))
              }
              <li className="page-item">
                <span className={`page-link pointer ${currentPage == pageCount ? "disbled" : ""}`} aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
                  <span aria-hidden="true">&laquo;</span>
                </span>
              </li>
            </ul>
          </nav>

        ) :
          null
      }


    </>
  );
}

export default Paginatedtable;
