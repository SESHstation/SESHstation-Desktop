const {app, BrowserWindow, Menu} = require('electron')

BrowserWindow.removeDevToolsExtension
function createWindow () {

const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 600, backgroundColor: '#292a2d',  webPreferences: {
devTools: false
}})

win.loadURL('https://seshstation.com/public/main')
setMainMenu();

    }
  function setMainMenu() {
  const template = [
    {
      label: 'App', 
      submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
      { role: 'quit', accelerator: 'CmdOrCtrl+Q' }
      ],
    },
    { 
      label: 'Discography',
      click() { require('electron').shell.openExternal('https://docs.seshstation.com/sources/discography') 
    }},

    {
      label: 'Help', 
      submenu: [
                {
          label: 'Learn more', 
          accelerator: 'CmdOrCtrl+L',
          click() { require('electron').shell.openExternal('https://docs.seshstation.com/apps/desktop') 
          }
        },
        {
          label: 'Documentation', 
          accelerator: 'CmdOrCtrl+D',
          click() { require('electron').shell.openExternal('https://docs.seshstation.com') 
          }
        },
        {
          label: 'Technical Forum', 
          accelerator: 'CmdOrCtrl+T',
          click() { require('electron').shell.openExternal('https://tech.seshstation.com/') 
          }
        }
      ],
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})