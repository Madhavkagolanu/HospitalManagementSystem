import { create } from "zustand";
import axios from "axios";

export const useTokenStore = create((set) => ({
  token: { token: "", message: "", statuscode: "", role: "" },
  setStatusCode: (newStatus) =>
    set(() => ({ token: { statuscode: newStatus } })),
  setToken: (newToken) => set(() => ({ token: { token: newToken } })),
  fetchnewToken: async (serverURL, username, password) => {
    let queryObj = {
      username: username,
      password: password,
    };
    let output = await axios.post(serverURL, queryObj);
    console.log(output);
    let servertoken = output.data.token;
    set(() => ({
      token: {
        token: servertoken,
        statuscode: output.status,
        role: output.data.usergroup[0].groupname,
      },
    }));
  },
}));
export const useUsernameStore = create((set) => ({
  username: "",
  setusername: (username) => set(() => ({ username: username })),
}));
export const usePasswordStore = create((set) => ({
  password: "",
  setpassword: (password) => set(() => ({ password: password })),
}));
