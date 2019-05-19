import React from 'react';
import _ from 'lodash';


const Pagination = (props) => {
    const {moviesCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage)

    const pageCount = Math.ceil(moviesCount / pageSize);

    if(pageCount === 1) return null;

// use lodash library to create a arra with defined length
    const pages = _.range(1, pageCount + 1,1)

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pages.map(page =>
                        <li  key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link"
                               onClick={() => onPageChange(page)}>
                                {page}
                            </a>
                        </li>)}

                </ul>
            </nav>
        </div>
    );
};

export default Pagination;