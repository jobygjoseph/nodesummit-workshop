const { app, BrowserWindow } = require('electron')
// const fs = require('fs')
let myWindow;

app.on('ready', () => {
    myWindow = new BrowserWindow()
    myWindow.loadFile('index.html')
});


