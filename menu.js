const { Menu } = require('electron')

function createMenu() {
    let template = [{
        label: 'Hello'
    }];
    if (process.platform === 'darwin') {
        template.unshift({
            label: "Code Editor",
            submenu: [{
                label: 'Quitter',
                accelerator: 'CmdOrCtrl+Q',
                click: () => app.quit()
            }]
        })
    }
    const menu = Menu.buildFromTemplate(template)

    Menu.setApplicationMenu(menu)
}

module.exports = { createMenu }