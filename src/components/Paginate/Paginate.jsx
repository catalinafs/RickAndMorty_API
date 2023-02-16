import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber,setpageNumber}) => {
    return(
        
        <ReactPaginate 
        nextLabel="Siguiente" previousLabel="Anterior"        
         className='pagination justify-content-center gap-4 my-4' 
         pageCount={info.pages}
         nextClassName="btn  " 
         previousClassName='btn '
         pageClassName='page-item'
         pageLinkClassName='page-link'
         activeClassName='active'         
         onPageChange={(data)=>setpageNumber(data.selected+1)}
         />
    )

}

export default Pagination