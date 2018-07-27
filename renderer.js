const loader = require('monaco-loader');
const $ = document.querySelector.bind(document);
console.log('👺');

let editor

loader().then((monaco) => {
    const div = $('#container');

    editor = monaco.editor.create(div, {
        language: 'javascript',
        theme: 'vs-dark', 
        automaticLayout: true
    })
});