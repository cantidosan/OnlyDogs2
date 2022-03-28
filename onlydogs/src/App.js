import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import Browse from './components/Browse';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path=":username" element={<UserPage />} />
          <Route path="Browse/:pet_id" element={<Browse />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
