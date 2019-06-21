const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.     win.loadFile('index.html')   }
  // win.loadURL(`file://${path.join(__dirname, './index.html')}`)
  win.loadURL('http://localhost:3000/');
}
app.on('ready', createWindow);
