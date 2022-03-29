import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import Browse from './components/Browse';
import { StateProvider } from './state';


function App() {

  const initialState = {
    user: null,
    isLoggedIn: null
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'userLogin':
        return {
          ...state,
          user: action.payload,
          isLoggedIn: action.payload
        };

      default:
        return state;
    }
  };








  return (

    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path=":username" element={<UserPage />} />
          <Route path="Browse/:pet_id" element={<Browse />} />

        </Routes>
      </BrowserRouter>
    </StateProvider>

  );
}

export default App;
