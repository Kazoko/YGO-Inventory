document.getElementById("btnAC").addEventListener("click", () => {
    const electron = require('electron')
    const path = require('path')
    const BrowserWindow = electron.remote.BrowserWindow;
    
    let AMDCard

    AMDCard = new BrowserWindow({
        width: 400,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          nodeIntegration: true
        }
      })

  AMDCard.loadFile('AddCard.html')





})