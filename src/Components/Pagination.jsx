import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  totalPages,
  currentPage,
  setPage,
  hasNextPage,
  hasPrevPage,
}) {
  const [total, setTotal] = useState([]);
  useEffect(() => {
    const tempArray = [];
    for (let i = 1; i <= totalPages; i++) {
      tempArray.push(i);
    }
    setTotal(tempArray);
  }, [totalPages]);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-5">
        <div
          className="dataTables_info"
          id="DataTables_Table_0_info"
          role="status"
          aria-live="polite"
        >
          {/* Showing 1 to 2 of 2 entries */}
        </div>
      </div>
      <div className="col-sm-12 col-md-7">
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="DataTables_Table_0_paginate"
        >
          <ul className="pagination">
            <li
              className="paginate_button page-item previous"
              id="DataTables_Table_0_previous"
            >
              <Link
                to="#"
                className="page-link"
                onClick={() => hasPrevPage && setPage(currentPage - 1)}
                style={{ cursor: "pointer" }}
              >
                Previous
              </Link>
            </li>
            {total?.map((page) => (
              <li
                className={`paginate_button page-item ${
                  page == currentPage ? "active" : ""
                }`}
                onClick={() => setPage(page)}
              >
                <Link to="#" tabIndex={0} className="page-link" key={page}>
                  {page}
                </Link>
              </li>
            ))}
            <li
              className="paginate_button page-item next"
              id="DataTables_Table_0_next"
              onClick={() => hasNextPage && setPage(currentPage + 1)}
              style={{ cursor: "pointer" }}
            >
              <Link to="#" tabIndex={0} className="page-link">
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
