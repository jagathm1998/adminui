import React from 'react';
import classnames from 'classnames';
import './Pagination.css'


const Pagination = ({currentPage, totalPages, onPageChange}) => {
   return (
    <div className='pagination-container'>
        <button 
        className={classnames('pagination-button', {'disabled': currentPage === 1})}
        onClick={() => onPageChange(1)}
        disabled = {currentPage === 1}
        >
         First
        </button>
        <button 
        className={classnames('pagination-button', {'disabled': currentPage === 1})}
        onClick={() => onPageChange(currentPage - 1)}
        disabled = {currentPage === 1}
        >
         Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button 
        className={classnames('pagination-button', {'disabled': currentPage === totalPages})}
        onClick={() => onPageChange(currentPage + 1)}
        disabled = {currentPage === totalPages}
        >
         Next
        </button>
        <button 
        className={classnames('pagination-button', {'disabled': currentPage === totalPages})}
        onClick={() => onPageChange(totalPages)}
        disabled = {currentPage === totalPages}
        >
         Last
        </button>
    </div>
   )
}

export default Pagination;