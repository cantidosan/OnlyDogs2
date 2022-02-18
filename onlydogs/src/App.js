import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="username" element={<UserPage />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
