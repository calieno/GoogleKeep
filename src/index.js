const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    title: 'Google Keep',
    center: true,
    icon: path.join(__dirname+'/src/icon-keep.png')
  })

  mainWindow.loadURL('https://keep.google.com/')
  mainWindow.on('ready-to-show', ()=>{
    mainWindow.maximize()
    mainWindow.show()
  })  
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})