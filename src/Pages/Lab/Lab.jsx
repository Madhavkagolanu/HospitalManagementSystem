import React from "react";
import SideBar from "../../Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Con } from "../../Config/Configure";
import CreateInvoice from "../../Components/Lab/createInvoice";
import CatalogItems from "../../Components/Lab/catalogItems";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTokenStore } from "../../store/store";
import { usePasswordStore } from "../../store/store";
import { useUsernameStore } from "../../store/store";
var _ = require("lodash");

function Lab() {
  const SideBarInfo1 = Con.Lab.SideBarInfo1;
  const SideBarInfo2 = Con.Lab.SideBarInfo2;
  const setpassword = usePasswordStore((state) => state.setpassword);
  const setusername = useUsernameStore((state) => state.setusername);
  const parentPath = Con.Lab.parentPath;
  const token = useTokenStore((state) => state.token.token);
  const setToken = useTokenStore((state) => state.setToken);
  const navigate = useNavigate();

  const logout = () => {
    setpassword("");
    setusername("");
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
      navigate(`${parentPath}/createinvoice`);
    }
  }, [token]);

  return (
    <div className="receptionDiv">
      <div className="Rece-flex-container">
        <div className="Rece-flex-item-left">
          <SideBar
            Info1={SideBarInfo1}
            Info2={SideBarInfo2}
            parentPath={parentPath}
          />
          <button class="logoutButton" onClick={logout}>
            Logout
          </button>
        </div>
        <div className="Rece-flex-item-right">
          <Routes>
            <Route path="catalogitems" element={<CatalogItems />} />
            <Route path="createinvoice" element={<CreateInvoice />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Lab;
