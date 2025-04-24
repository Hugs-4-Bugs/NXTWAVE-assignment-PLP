// src/app/components/AuthForm.js
'use client';
import { useState } from 'react';
import styles from '../../styles/AuthForm.module.css';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For signup

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      onSubmit({ email, password });
    } else if (type === 'signup') {
      onSubmit({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {type === 'signup' && (
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">{type === 'login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default AuthForm;