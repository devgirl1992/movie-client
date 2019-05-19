import React from 'react';

const Pagination2 = (props) => {
   const {moviesCount, pageSize} = props;
   const pageCount = moviesCount / pageSize;

   const pages = [... new Array(pageCount)];

    return (
        <div>
            <h2>Pagination</h2>
            <nav>
                <ul className="pagination">
                    {pages.map(page =>
                        <li className="page-item">
                            <a className="page-link">{page}</a>
                        </li>)}

                </ul>
            </nav>
        </div>
    );
};

export default Pagination2;