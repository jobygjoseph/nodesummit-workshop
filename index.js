const { app, BrowserWindow } = require('electron')
// const fs = require('fs')
const { createMenu } = require('./menu')
let myWindow;

app.on('ready', () => {
    myWindow = new BrowserWindow()
    myWindow.loadFile('index.html')

    myWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault()

        // console.log(url, url.slice(7));

        // IPC
        
        e.sender.send('open-file', url.slice(7)) // we don't want "file://" prefix
    })

    createMenu()
});

module.exports = {
    myWindow
}
