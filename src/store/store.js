import { create } from "zustand";
import axios from "axios";

export const useTokenStore = create((set) => ({
  token: { token: "", message: "", statuscode: "", role: "" },
  setStatusCode: (newStatus) =>
    set((state) => ({ token: { ...state.token, statuscode: newStatus } })),
  setToken: (newToken) =>
    set((state) => ({ token: { ...state.token, token: newToken } })),
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

      set((state) => ({
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
        set((state) => ({
          token: {
            token: "",
            statuscode: httpcode,
            message: error,
          },
        }));
      } catch (error) {
        set((state) => ({
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
      set((state) => ({
        doctors: {
          ...state.doctors,
          data: doctordata,
          statuscode: output.status,
        },
      }));
    } catch (error) {
      try {
        let httpcode = error.response.status;
        set((state) => ({
          doctors: {
            ...state.doctors,

            statuscode: httpcode,
            message: error,
          },
        }));
      } catch (error) {
        set((state) => ({
          doctors: {
            ...state.doctors,

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

export const useIPDetailsStore = create((set) => ({
  ippatientdetails: {
    patientid: "",
    govttypeid: "",
    govtidvalue: "",
    relativename: "",
    relativerelation: "",
    relativephonenumber: 0,
    address: "",
    bedtypeid: "",
    floornumber: "",
    bedno: "",
    roomno: "",
    deptid: "",
    consultingdoctor: "",
  },
  setippatientid: (newpatientID) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, patientid: newpatientID },
    }));
  },
  setippatientgovtidtype: (typeid) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, govttypeid: typeid },
    }));
  },
  setippatientgovtidvalue: (docvalue) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, govtidvalue: docvalue },
    }));
  },
  setippatientrelativename: (relativename) => {
    set((state) => ({
      ippatientdetails: {
        ...state.ippatientdetails,
        relativename: relativename,
      },
    }));
  },
  setippatientrelativerelation: (relativerelation) => {
    set((state) => ({
      ippatientdetails: {
        ...state.ippatientdetails,
        relativerelation: relativerelation,
      },
    }));
  },
  setippatientrelativephonenumber: (relativephonenumber) => {
    set((state) => ({
      ippatientdetails: {
        ...state.ippatientdetails,
        relativephonenumber: relativephonenumber,
      },
    }));
  },
  setippatientaddress: (address) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, address: address },
    }));
  },
  setippatientbedtypeid: (bedtypeid) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, bedtypeid: bedtypeid },
    }));
  },
  setippatientfloornumber: (floornumber) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, floornumber: floornumber },
    }));
  },
  setippatientbedno: (bedno) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, bedno: bedno },
    }));
  },
  setippatientroomno: (roomno) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, roomno: roomno },
    }));
  },
  setippatientdeptid: (deptid) => {
    set((state) => ({
      ippatientdetails: { ...state.ippatientdetails, deptid: deptid },
    }));
  },
  setippatientconsultingdoctor: (consultingdoctor) => {
    set((state) => ({
      ippatientdetails: {
        ...state.ippatientdetails,
        consultingdoctor: consultingdoctor,
      },
    }));
  },

  resetippatientdetails: () => {
    set((state) => ({
      ippatientdetails: {
        ...state.ippatientdetails,
        patientid: "",
        govttypeid: "",
        govtidvalue: "",
        relativename: "",
        relativerelation: "",
        relativephonenumber: "",
        address: "",
        bedtypeid: "",
        floornumber: "",
        bedno: "",
        roomno: "",
        deptid: "",
        consultingdoctor: "",
      },
    }));
  },
}));
