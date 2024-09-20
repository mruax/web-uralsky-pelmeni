import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/register', {
        email,
        password,
        login
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Регистрация:</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <form onSubmit={handleSubmit}>
              <input
                className="title-2"
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <input
                className="title-2"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="title-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="title-2" type="submit">Зарегистрироваться</button>
            </form>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Register;