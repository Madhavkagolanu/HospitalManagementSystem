import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import Reception from "./Pages/Reception/Reception";
import Lab from "./Pages/Lab/Lab";
// import Search from "./Pages/Reception/Search";
// import CreateVisit from "./Pages/Reception/CreateVisit";
// import CreateInvoice from "./Pages/Lab/createInvoice";
// import CatalogItem from "./Pages/Lab/catalogItem";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reception/*" element={<Reception />} />
          <Route path="/lab/*" element={<Lab />} />
          {/* <Route path="/search" element={<Search />} />
          <Route path="/createvisit" element={<CreateVisit />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/createcatalogitem" element={<CatalogItem />} /> */}
        </Routes>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
