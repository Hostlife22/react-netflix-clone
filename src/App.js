import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { selectUser } from './features/userSlice';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
