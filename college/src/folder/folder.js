const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested 1",
          isFolder: true,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false,
        },
      ],
    },
    {
      name: "Package.json",
      isFolder: true,
    },
  ],
}
export default explorer
