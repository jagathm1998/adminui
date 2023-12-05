import React, { useState } from "react";

const Row = ({ user, isSelected, onSelect, onDelete, onSave }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ name:user.name, email:user.email, role:user.role});

  const handleSelect = () => {
    onSelect(user.id);
  };
  const handleDeleteClick = () => {
    onDelete(user.id);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onSave(user.id, editedData)
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditedData({ name:user.name, email:user.email, role:user.role});
    setEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData, [field]: value,
    }))
  }

  return (
    <tr style={{ backgroundColor: isSelected ? "#ccc" : "transparent" }}>
      <td>
        <input type="checkbox" checked={isSelected} onChange={handleSelect} />
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedData.role}
            onChange={(e) => handleInputChange('role', e.target.value)}
          />
        ) : (
          user.role
        )}
      </td>
      <td>
        {isEditing ? (
            <>
            <button className="save-button" onClick={handleSaveClick}>Save</button>
            <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
            </>
            ):(
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            )}
        <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
