import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import Transactions from "./pages/Transactions";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Logout from "./pages/Logout";
import Purse from "./pages/Purse";
import Support from "./pages/Support";
import BankCard from "./pages/BankCard";
import GirlCode from "./pages/GirlCode";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/plans" element={<Plans />}></Route>
          <Route path="/purse" element={<Purse />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/banks" element={<BankCard />}></Route>
          <Route path="/girlcode" element={<GirlCode />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/aboutHervest" element={<About />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
