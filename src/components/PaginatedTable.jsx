import React from 'react';

const Paginatedtable = ({ data, DataInfo, additionFeild}) => {
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
                    {data.map(t => (
                        <tr>
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
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Paginatedtable;
