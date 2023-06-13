export const folderStructureTree = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
      {
        id: 2,
        name: "public",
        isFolder: true,
        items: [
          {
            id: 3,
            name: "favicon.ico",
            isFolder: false,
          },
          {
            id: 4,
            name: "index.html",
            isFolder: false,
          },
          {
            id: 5,
            name: "manifest.json",
            isFolder: false,
          },
          {
            id: 6,
            name: "robots.txt",
            isFolder: false,
          },
        ],
      },
      {
        id: 7,
        name: "src",
        isFolder: true,
        items: [
          {
            id: 8,
            name: "components",
            isFolder: true,
            items: [
              {
                id: 9,
                name: "File",
                isFolder: true,
                items: [
                  {
                    id: 10,
                    name: "index.js",
                    isFolder: false,
                  },
                ],
              },
              {
                id: 11,
                name: "Folder",
                isFolder: true,
                items: [
                  {
                    id: 12,
                    name: "index.js",
                    isFolder: false,
                  },
                ],
              },
            ],
          },
          {
            id: 13,
            name: "constants",
            isFolder: true,
            items: [
              {
                id: 14,
                name: "folderStructure.js",
                isFolder: false,
              },
            ],
          },
          {
            id: 15,
            name: "App.css",
            isFolder: false,
          },
          {
            id: 16,
            name: "App.test.js",
            isFolder: false,
          },
          {
            id: 17,
            name: "index.css",
            isFolder: false,
          },
          {
            id: 18,
            name: "index.js",
            isFolder: false,
          },
        ],
      },
      {
        id: 19,
        name: ".gitignore",
        isFolder: false,
      },
      {
        id: 20,
        name: "package.json",
        isFolder: false,
      },
      {
        id: 21,
        name: "package.lock.json",
        isFolder: false,
      },
    ],
  };