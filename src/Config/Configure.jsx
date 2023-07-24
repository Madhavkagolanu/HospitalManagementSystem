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
      // '': "Create Visit",
      // 'createvisit/OP': "Create Visit OP",
      createinvoice: "Create Invoice",
    },
    newPatient: {
      InputFields: [
        ["Name", 1, "text"],
        ["Date", 1, "date"],
        ["Sex", 1, "text"],
        ["Mobile", 1, "text"],
        ["Alternate Mobile", 0, "text"],
        ["EmailId", 0, "email"],
      ],
    },
    Search: {
      InputFields: [["OR", 0, "label"]],
    },
    CreateVisitIP: {
      InputFields: [["Payment Type", 1, "text"]],
    },
    CreateVisitOP: {
      InputFields: [["Payment Type", 1, "text"]],
    },
    createInvoice: {
      InputFields: [
        ["Patient Name", 1, "text"],
        ["Patient Ph No", 1, "number"],
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
      catalogitems: "CREATE ITEM",
    },
    createInvoice: {
      InputFields: [
        ["Patient Name", 1, "text"],
        ["Patient Ph No", 1, "number"],
      ],
    },
    catalogItems: {
      InputFields: [
        ["Lab Item Name", 1, "text"],
        ["mrp", 1, "text"],
      ],
    },
  },
};
