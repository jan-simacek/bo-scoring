// require('electron-debug')();

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.removeMenu();

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/skating/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Open the DevTools (optional)
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
