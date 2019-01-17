
const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;
const url = require('url');
const path = require('path');

let mainWindow = null;

app.on('ready', ()=> {

  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPrefrences: {
      webSecurity: false
    }
  });

  mainWindow.webContents.openDevTools();

  let template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Quit',
          accelerate: 'CommandOrControl+Q',
          click() {
            app.quit();
          }
        },{
          role: 'reload'
        }
      ]
    }
  ];

  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
});