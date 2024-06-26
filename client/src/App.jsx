import './App.css';

import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../src/hook/UserContext";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import LogOutPage from "./pages/LogOutPage";
import HomePage from "./pages/HomePage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogOutPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  )
}

export default App
