import React from "react";
import "./App.css";
import From from "./Form";
import BoxExercise from "./BoxExercise";
import Punchline from "./Punchline";
import UnreadMessage from "./UnreadMessage";
import ApiCall from "./ApiCall";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import MemeGenerator from "./MemeGenerator";
import WindowTracker from "./WindowTracker";
import FilterableProductTable from "./FilterableProductTable";
import SculptureGallery from "./SculptureGallery";
import ChatApp from "./Chat-app/ChatApp";
import TaskApp from "./TaskApp/TaskApp";
import UseReducer from "./UseReducer";

const exercisesName = [
  "Box fill",
  "Punchline",
  "Unread message",
  "Form",
  "Login form",
  "API call",
  "Meme Generator",
  "Window tracker",
  "Product list",
  "Sculpture Gallery",
  "Chat app",
  "task App",
  "useReducer"
];

function App() {
  const [show, setShow] = React.useState(true);
  function toggleWindowTracker() {
    setShow((oldValue) => !oldValue);
  }

  // dark mode
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleTheme() {
    setDarkMode((oldValue) => !oldValue);
  }

  return (
    <Router>
      <main className={darkMode ? "dark" : "light"}>
        <div className="heading">
          <h1>List of exercises</h1>
          <div className="theme-toggle">
            <button disabled={!darkMode} onClick={toggleTheme}>
              Light
            </button>
            <label htmlFor="darkMode">
              <input
                type="checkbox"
                name="darkMode"
                id="darkMode"
                onClick={toggleTheme}
              />
              <span className="toggle"></span>
            </label>
            <button disabled={darkMode} onClick={toggleTheme}>
              Dark
            </button>
          </div>
        </div>
        <ul className="link-container">
          {exercisesName.map((name) => (
            <li>
              <Link to={`${name.split(" ").join("-")}`}>{name}</Link>
            </li>
          ))}
        </ul>

        <hr />
        <hr />

        <Routes>
          <Route exact path="/box-fill" element={<BoxExercise />} />
          <Route exact path="/punchline" element={<Punchline />} />
          <Route exact path="/unread-Message" element={<UnreadMessage />} />
          <Route exact path="/form" element={<From />} />
          <Route exact path="/login-Form" element={<LoginForm />} />
          <Route exact path="/api-Call" element={<ApiCall />} />
          <Route exact path="/meme-Generator" element={<MemeGenerator />} />
          <Route
            exact
            path="/window-Tracker"
            element={
              <div className="window-tracker">
                <button onClick={toggleWindowTracker}>
                  Toggle Window Tracker
                </button>
                {show && <WindowTracker />}
              </div>
            }
          />
          <Route path="/Product-list" element={<FilterableProductTable />} />
          <Route path="/task-App" element={<TaskApp />} />
          <Route path="/sculpture-gallery" element={<SculptureGallery />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/chat-app" element={<ChatApp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
