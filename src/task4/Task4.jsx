import React from 'react'
import { useState } from 'react';

export default function Task4() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: '',
    state: 'TG',
    gender: '',
    accepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>State:</label><br />
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="TG">TG</option>
            <option value="AP">AP</option>
            <option value="TN">TN</option>
          </select>
        </div>

        <div>
          <label>Gender:</label><br />
          <input
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === 'M'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="F"
            checked={formData.gender === 'F'}
            onChange={handleChange}
          /> Female
        </div>

        <div>
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
          <label>I accept the contract</label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

