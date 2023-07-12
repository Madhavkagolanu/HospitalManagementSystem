import React from "react";
import "./Reception.css";
import SideBar from "../../Components/Sidebar";
import FormDetails from "../../Components/FormDetails";
import { Con } from "../../Config/Configure";
import { Route, Routes } from "react-router-dom";
import NewPatient from "../../Components/Reception/NewPatient";
import SearchPatient from "../../Components/Reception/SearchPatient";
import CreateVisit from "../../Components/Reception/CreateVisit";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTokenStore } from "../../store/store";
var _ = require("lodash");

function Reception() {
  const SideBarInfo1 = Con.Reception.SideBarInfo1;
  const SideBarInfo2 = Con.Reception.SideBarInfo2;
  const parentPath = Con.Reception.parentPath;
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const navigate = useNavigate();

  const logout = () => {
    setToken("");
  };

  useEffect(() => {
    if (_.isNull(token) || _.isUndefined(token) || token == "") {
      console.log("No Token");
      navigate("/", {
        replace: true,
      });
    } else {
      console.log(token);
      console.log("token found");
      navigate(`${parentPath}/newPatient`);
    }
  }, [token]);

  return (
    <div>
      <div className="Rece-flex-container">
        <div className="Rece-flex-item-left">
          <SideBar
            Info1={SideBarInfo1}
            Info2={SideBarInfo2}
            parentPath={parentPath}
          />
          <button className="button-17 logout" role="button" onClick={logout}>
            Logout
          </button>
        </div>
        <div>
          <Routes>
            <Route path="newPatient" element={<NewPatient />} />
            <Route path="search" element={<SearchPatient />} />
            <Route path="createvisit" element={<CreateVisit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Reception;