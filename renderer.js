const fs = require('fs');
const loader = require('monaco-loader');
const { ipcRenderer } = require('electron');
const $ = document.querySelector.bind(document);
console.log('👺');

let editor

ipcRenderer.on('open-file', ( e, filePath ) => openFile(filePath));

function openFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    editor.setValue(content)
}

loader().then((monaco) => {
    const div = $('#container');

    editor = monaco.editor.create(div, {
        language: 'javascript',
        theme: 'vs-dark', 
        automaticLayout: true
    })
});