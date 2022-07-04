import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from 'context/UserContext';

import Header from 'components/Header'
import Register from 'pages/Register'
import Login from 'pages/Login'
import Home from 'pages/Home'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/register"
              element={<Register/>}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
