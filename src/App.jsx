import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import Reception from "./Pages/Reception/Reception";
import Search from "./Pages/Reception/Search";
import CreateVisit from './Pages/Reception/CreateVisit';
import CreateInvoice from './Pages/Lab/createInvoice';
import CatalogItem from './Pages/Lab/catalogItem'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/search" element={<Search />} />
        <Route path="/createvisit" element={<CreateVisit />} />
        <Route path="/createinvoice" element={<CreateInvoice />} />
        <Route path="/createcatalogitem" element={<CatalogItem />} />
      </Routes>
    </Router>
  );
}

export default App;
