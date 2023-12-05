/* eslint-disable import/no-anonymous-default-export */
import React, { useState} from 'react';
import { ReactComponent as SearchIcon } from './Search icon.svg';
import './Searchbar.css';


 const Searchbar = ({ onSearch }) => {
   const [searchTerm, setSearchTerm] = useState('')
   
   const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchTerm)
   }

   return  <div className='searchbar'>
    <form className='formData' onSubmit={handleSearch}>
    <input placeholder= 'Search by name, email or role' className='search-input' type='text' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value) }/>
    <button className='button-data' onClick={handleSearch}><SearchIcon />
    </button>
   </form>
   </div>
}

export default Searchbar;