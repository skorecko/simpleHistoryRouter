//an array, defining the routes
export default [
  {
    path: "", //the part after the first '/' in the url (so-called path)
    target: "router-view", //id of the target html element
    content: "<h1>Welcome!</h1>" //the content to be rendered to the target html element
  },

  {
    path: "main",
    target: "router-view",
    content: "<h1>Main Content</h1>"
  },

  {
    path: "about",
    target: "router-view",
    content: "<h1>About page</h1>"
  }
];
