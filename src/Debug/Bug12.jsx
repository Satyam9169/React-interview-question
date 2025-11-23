//HOW TO CALL THIS API
const folderStructure = {
  name: 'folder',
  folders: [
    {
      name: 'folder-1',
      folders: [
        {
          name: 'folder-1-1',
          folders: [
            {
              name: 'folder-1-1-1',
              folders: [],
            },
          ],
        },
        {
          name: 'folder-1-2',
          folders: [
            {
              name: 'folder-1-2-1',
              folders: [
                {
                  name: 'folder-1-2-2',
                  folders: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'folder-2',
      folders: [
        {
          name: 'folder-2-1',
          folders: [
            {
              name: 'folder-2-1-1',
              folders: [],
            },
          ],
        },
      ],
    },
  ],
};

export function RenderFolder() {}
