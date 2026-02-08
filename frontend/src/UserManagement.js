import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserManagement.css';

const API_URL = 'http://127.0.0.1:8000/users';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [editingId, setEditingId] = useState(null);

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error connecting to backend. Make sure FastAPI is running on port 8000');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create or Update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Update existing user
        await axios.put(`${API_URL}/${editingId}`, formData);
        alert('User updated successfully!');
        setEditingId(null);
      } else {
        // Create new user
        await axios.post(API_URL, formData);
        alert('User created successfully!');
      }
      
      setFormData({ name: '', email: '', age: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Error saving user. Please try again.');
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, age: user.age });
    setEditingId(user.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert('User deleted successfully!');
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error deleting user. Please try again.');
      }
    }
  };

  // Cancel edit
  const handleCancel = () => {
    setFormData({ name: '', email: '', age: '' });
    setEditingId(null);
  };

  return (
    <div className="container">
      <h1>👥 User Management System</h1>
      <p className="subtitle">Full-Stack CRUD Application with FastAPI & React</p>

      {/* Form Section */}
      <div className="form-section">
        <h2>{editingId ? '✏️ Edit User' : '➕ Add New User'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
            max="150"
          />
          <div className="button-group">
            <button type="submit" className="btn-submit">
              {editingId ? '💾 Update User' : '➕ Add User'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="btn-cancel">
                ❌ Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Users Table */}
      <div className="table-section">
        <h2>📋 All Users ({users.length})</h2>
        {users.length === 0 ? (
          <p className="no-users">No users found. Add your first user above! 👆</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => handleEdit(user)} className="btn-edit">
                      ✏️ Edit
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="btn-delete">
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UserManagement;