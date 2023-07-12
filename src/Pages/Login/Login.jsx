import React, { useState } from "react";
import "./Login.css";
import "@lottiefiles/lottie-player";
import LottieAnimation from "../../Components/DocAnim";

function App() {
  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const SUB = () => {
    console.log(userName);
    console.log(Password);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <span className="wttfo">Welcome to the future of </span>
          <span className="ehms">E-HMS!</span>
          <LottieAnimation />
        </div>
        <div class="col-sm">
          <div className="Right">
            <h3 className="ltd">LOGIN TO DASHBOARD</h3>
            {/* <input
              className="inputs"
              placeholder="Username"
              type="text"
              onChange={(e) => setuserName(e.target.value)}
              value={userName}
            /> */}
            <div class="form__group field">
              <input
                type="input"
                class="form__field inputs"
                placeholder="Username"
                name="name"
                id="name"
                required
              />
              {/* <label for="name" class="form__label">
                UserName
              </label> */}
            </div>

            <div class="form__group field">
              <input
                type="input"
                class="form__field inputs"
                placeholder="Password"
                name="name"
                id="name"
                required
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

            <button className="button-9" onClick={SUB}>
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
