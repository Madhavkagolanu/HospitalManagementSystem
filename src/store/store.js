import { create } from "zustand";
import axios from "axios";

export const useTokenStore = create((set) => ({
  token: { token: "", message: "", statuscode: "", role: "" },
  setStatusCode: (newStatus) =>
    set(() => ({ token: { statuscode: newStatus } })),
  setToken: (newToken) => set(() => ({ token: { token: newToken } })),
  fetchnewToken: async (serverURL, username, password) => {
    console.log("Requesting New Token....");
    serverURL = process.env.REACT_APP_GetTokenURL;
    let queryObj = {
      username: username,
      password: password,
    };
    try {
      let output = await axios.post(serverURL, queryObj);
      // console.log(output);
      let servertoken = output.data.token;

      set(() => ({
        token: {
          token: servertoken,
          statuscode: output.status,
          role: output.data.usergroup[0].groupname,
        },
      }));
    } catch (error) {
      try {
        let httpcode = error.response.status;
        console.log(error);
        set(() => ({
          token: {
            token: "",
            statuscode: httpcode,
            message: error,
          },
        }));
      } catch (error) {
        set(() => ({
          token: {
            token: "",
            statuscode: 500,
            message: error,
          },
        }));
      }
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
    serverURL = process.env.REACT_APP_GetAllDoctors;
    const config = {
      headers: {
        tokendata: token,
      },
    };

    try {
      let output = await axios.get(serverURL, config);
      console.log(output);
      let doctordata = output.data.data.data;
      set(() => ({
        doctors: {
          data: doctordata,
          statuscode: output.status,
        },
      }));
    } catch (error) {
      try {
        let httpcode = error.response.status;
        set(() => ({
          doctors: {
            statuscode: httpcode,
            message: error,
          },
        }));
      } catch (error) {
        set(() => ({
          doctors: {
            statuscode: 500,
            message: error,
          },
        }));
      }
    }
  },
}));

export const usePatientIDStore = create((set) => ({
  patientID: "",
  setpatientID: (newpatientID) => {
    console.log("inside set patient id: ", newpatientID);
    set(() => ({ patientID: newpatientID }));
  },
}));
