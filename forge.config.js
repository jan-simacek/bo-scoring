const path = require("path");

module.exports = {
  packagerConfig: {
    icon: 'icons/icon.png'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        icon: path.resolve(__dirname, "icons/icon.png")
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: path.resolve(__dirname, "icons/icon.icns"),
        format: 'ULFO'
      }
    }
  ],
};
