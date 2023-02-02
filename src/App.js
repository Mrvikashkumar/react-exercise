import React from 'react'
import './App.css';
import From from './Form';
import BoxExercise from './BoxExercise';
import Punchline from './Punchline';
import UnreadMessage from './UnreadMessage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './LoginForm';

function App() {

  // console.log('inside app components')
  return (
    <Router>
      <main>
        <h1>List of exercises</h1>
        <ul>
          <li><Link to="/">Box fill</Link></li>
          <li><Link to="/punchline">Punchline</Link></li>
          <li><Link to="/unreadMessage">Unread message</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/loginForm">Login fom</Link></li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<BoxExercise />} />
          <Route exact path="/punchline" element={<Punchline />} />
          <Route exact path="/unreadMessage" element={<UnreadMessage />} />
          <Route exact path="/form" element={<From />} />
          <Route exact path="/loginForm" element={<LoginForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;