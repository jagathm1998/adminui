import React, { useState, useEffect } from 'react'; 
import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar';
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import {getUsers} from './api';

const PAGESIZE = 10;

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  const fetchUsers = async () => {
    const allUsers = await getUsers();
    
    const filteredUsers = allUsers.filter((user) => 
      Object.values(user).some((value) => String(value).includes(searchTerm))
      )
      setTotalPages(Math.ceil(allUsers.length / PAGESIZE));
      setUsers(filteredUsers)
  }
  fetchUsers()
}, [searchTerm]);

const handlePageChange = (page) => {
  setCurrentPage(Math.max(1, Math.min(page, totalPages)))
}

const handleSearch = (term) => {
  setSearchTerm(term)
  setCurrentPage(1)
}

const handleSelect = (userId) => {
  setSelectedRows((prevSelected) => {
    if(prevSelected.includes(userId)) {
      return prevSelected.filter((id) => id !== userId);
    } else {
      return [...prevSelected, userId]
    }
  })
}

const handleSelectAll = (selectAll) => {
   if(selectAll){
    const pageUsers = users.slice((currentPage - 1)* PAGESIZE, currentPage * PAGESIZE);
    const pageUserIds = pageUsers.map((user) => user.id);
    setSelectedRows((prevSelected) => [...new Set([...prevSelected, ...pageUserIds])])
   } else {
    setSelectedRows([])
   }
}

const handleDeleteSelected = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => !selectedRows.includes(user.id)))
    setSelectedRows([])
}

  return (
    <div>
      <Searchbar onSearch={handleSearch}/>
      <Table users={users.slice((currentPage - 1)* PAGESIZE, currentPage * PAGESIZE)}
      selectedRows={selectedRows} 
      onSelect={handleSelect} 
      onSelectAll={handleSelectAll}
      onDeleteSelected={handleDeleteSelected}/>
      <div style={{display:'flex', alignItems:'center', marginBottom:'10px', justifyContent:'space-evenly'}}>
      <button 
      style={{color:'#fff', backgroundColor: '#3498db', borderRadius:'4px', border:'none', padding:'8px 16px', margin:'0 4px', cursor:'pointer'}}
      onClick={handleDeleteSelected}>Delete Selected</button>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
      
      </div>
    </div>
  );
}

export default App;
