const fs = require('fs')
const { dialog, BrowserWindow } = require('electron')

function openFile() {
    dialog.showOpenDialog({
        defaultPath: __dirname
    }, (filePaths) => {
        const myWindow = BrowserWindow.getFocusedWindow()
        const [file] = filePaths; 
        myWindow.webContents.send('open-file', file)
    })
}

module.exports = {
    openFile
}