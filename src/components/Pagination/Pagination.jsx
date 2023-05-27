import React from 'react';
import './Pagination.css';

export const Pagination = ({ page, setPage }) => {
    return (
        <div className='ContainerPagination'>
            <button
                onClick={() => { setPage(page - 1) }}
                disabled={page <= 1}
            >{`<Prev`}</button>

            <h4><span>{page}</span> de 42</h4>

            <button
                onClick={() => { setPage(page + 1) }}
                disabled={page >= 42}
            >{`Next>`}</button>
        </div>
    );
}