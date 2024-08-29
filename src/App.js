import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import IndexPage from "./jsxFiles/IndexPage";
import HomePage from "./jsxFiles/HomePage.jsx";
import SignUp from "./authenticationFiles/signup.jsx";
import Login from "./authenticationFiles/login.jsx";
import FarmerPage from "./jsxFiles/FarmerPage.jsx";
import CustomerPage from "./jsxFiles/CustomerPage.jsx";
import AdminPage from "./jsxFiles/AdminPage.jsx";
import EmployeePage from "./jsxFiles/EmployeePage.jsx";
import TableCanvas from "./jsxFiles/practice files/TableCanvas.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Navigate to="/index" />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/farmer" element={<FarmerPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/tableCanvas" element={<TableCanvas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
