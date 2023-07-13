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
    try {
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
    } catch (error) {
      let httpcode = error.response.status;
      console.log(error);
      set(() => ({
        token: {
          statuscode: httpcode,
        },
      }));
    }
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

export const useDoctorStore = create((set) => ({
  doctors: { data: [], message: "", statuscode: "" },
  fetchalldoctors: async (serverURL, token) => {
    const config = {
      headers: {
        tokendata: token,
      },
    };

    try {
      let output = await axios.get(serverURL, config);
      let doctordata = output.data.data.data;
      set(() => ({
        doctors: {
          data: doctordata,
          statuscode: output.status,
        },
      }));
    } catch (error) {
      let httpcode = error.response.status;
      set(() => ({
        doctors: {
          statuscode: httpcode,
        },
      }));
    }
  },
}));
