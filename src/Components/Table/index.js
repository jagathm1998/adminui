import React from "react";
import Row from "../Row";
import classnames from 'classnames';
import './Table.css'

const Table = ({ users, selectedRows, onSelect, onSelectAll, onDeleteSelected, onSave }) => {
  const handleSelectAll = (e) => {
    onSelectAll(e.target.checked);
  }

  const handleDeleteSelected = () => {
    onDeleteSelected(selectedRows);
  }

  const handleSaveClick = (userId, editedData) => {
    console.log('Sve', userId, editedData);
  }

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th><input type='checkbox' onChange={handleSelectAll}/></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row
            key={user.id}
            user={user}
            isSelected={selectedRows.includes(user.id)}
            onSelect={onSelect}
            onDelete={handleDeleteSelected}
            onSave={handleSaveClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
