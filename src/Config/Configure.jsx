export const Con = {
  Reception: {
    parentPath: "/reception",
    SideBarInfo1: {
      imgURL: "https://rudrajyotinathray.files.wordpress.com/2022/04/g.jpeg",
      Title: "Reception",
    },
    SideBarInfo2: {
      newPatient: "Registration",
      search: "Search",
      createvisit: "Create Visit",
    },
    newPatient: {
      InputFields: [
        ["NAME", 1, "text"],
        ["DATE", 1, "date"],
        ["SEX", 1, "text"],
        ["MOBILE NUMBER", 1, "text"],
        ["ALT. MOBILE NUMBER", 0, "text"],
        ["EMAIL ID", 0, "email"],
        ["CONST. DOCTOR", 1, "text"],
        ["AMOUNT PAYABLE", 1, "number"],
        ["TRANSACTION ID", 1, "text"],
      ],
    },
    Search: {
      InputFields: [
        ["PATIENT ID", 1, "text"],
        ["OR", 0, "label"],
        ["MOBILE NUMBER", 1, "text"],
      ],
    },
    CreateVisit: {
      InputFields: [
        ["PATIENT ID", 1, "text"],
        ["CONST. DOCTOR", 1, "text"],
        ["VISITING CHARGES", 1, "number"],
        ["TRANSACTION ID", 1, "text"],
      ],
    },
  },
  Lab: {
    parentPath: "/lab",
    SideBarInfo1: {
      imgURL: "https://rudrajyotinathray.files.wordpress.com/2022/04/g.jpeg",
      Title: "Laboratory",
    },
    SideBarInfo2: {
      catalogitems: "CREATE CATALOG ITEM",
      createinvoice: "CREATE INVOICE",
    },
    createInvoice: {
      InputFields: [
        ["PATIENT ID", 1, "text"],
        ["PATIENT NAME", 1, "text"],
        ["PATIENT PH NO.", 1, "number"],
        ["CONST. DOCTOR", 1, "text"],
        ["LAB ITEM", 1, "text"],
        ["TRANSACTION ID", 1, "text"],
      ],
    },
    catalogItems: {
      InputFields: [
        ["LAB ITEM NAME", 1, "text"],
        ["MRP", 1, "text"],
      ],
    },
  },
};
