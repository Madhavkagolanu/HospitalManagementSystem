import React, { useEffect } from "react";
import "./Login.css";
import "@lottiefiles/lottie-player";
import LottieAnimation from "../../Components/DocAnim";
// import { getJWTtoken } from "./apis/userverification";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  useTokenStore,
  usePasswordStore,
  useUsernameStore,
} from "../../store/store";

var _ = require("lodash");

function App() {
  const token = useTokenStore((state) => state.token.token);
  const role = useTokenStore((state) => state.token.role);
  const fetchnewToken = useTokenStore((state) => state.fetchnewToken);
  const username = useUsernameStore((state) => state.username);
  const setusername = useUsernameStore((state) => state.setusername);
  const password = usePasswordStore((state) => state.password);
  const setpassword = usePasswordStore((state) => state.setpassword);
  const navigate = useNavigate();

  const login = async () => {
    try {
      await fetchnewToken(
        process.env.REACT_APP_GetTokenURL,
        username,
        password
      );
    } catch (error) {
      console.log("error triggered");
      console.log(error);
      console.log(error.response.status);
      let httpcode = error.response.status;
      setErrorToast(httpcode);
    }
  };

  const setErrorToast = (httpcode) => {
    console.log(httpcode);
    if (httpcode === 500) {
      toastErrorStatus("Something went wrong. Try Again!!");
    } else if (httpcode === 401) {
      toastErrorStatus("Invalid credentials!!");
    } else if (httpcode === 400) {
      toastErrorStatus("Incomplete Details!!");
    }
  };

  const toastSuccessStatus = (message) => {
    toast.success(message, {
      closeOnClick: true,
      theme: "light",
      autoClose: 3000,
      hideProgressBar: false,
      position: "bottom-center",
      pauseOnHover: false,
    });
  };
  const toastErrorStatus = (message) => {
    toast.error(message, {
      closeOnClick: true,
      theme: "light",
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      pauseOnHover: false,
    });
  };

  useEffect(() => {
    if (_.isNull(token) || _.isUndefined(token) || token === "") {
      console.log("use effecttriggered");
    } else {
      toastSuccessStatus("Login Successful");

      if (role === "Lab") {
        navigate("/lab/catalogitems", {
          replace: true,
        });
      } else if (role === "Reception") {
        navigate("/reception/newPatient", {
          replace: true,
        });
      }
    }
  }, [token]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <span className="wttfo">Welcome to the future of </span>
          <span className="ehms">E-HMS!</span>
          <LottieAnimation />
        </div>
        <div className="col-sm">
          <div className="Right">
            <h3 className="ltd">LOGIN TO DASHBOARD</h3>
            {/* <input
              className="inputs"
              placeholder="Username"
              type="text"
              onChange={(e) => setuserName(e.target.value)}
              value={userName}
            /> */}
            <div className="form__group field">
              <input
                type="input"
                className="form__field inputs"
                placeholder="Username"
                name="name"
                id="name"
                required
                onChange={(e) => setusername(e.target.value)}
              />
              {/* <label for="name" class="form__label">
                UserName
              </label> */}
            </div>

            <div className="form__group field">
              <input
                type="password"
                className="form__field inputs"
                placeholder="Password"
                name="name"
                id="name"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              {/* <label for="name" class="form__label">
                Password
              </label> */}
            </div>
            {/* <input
              className="inputs"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            /> */}

            <button className="button-9" onClick={login}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
      {/* <center className="foot">
        <p className="footer">&copy; 2023 Hospital. Designed by SoberSouls</p>
      </center> */}
    </div>
  );
}

export default App;