// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

/**
 * Create the browser window.
 */
function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1400,
        height: 1000,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    mainWindow.maximize();
    mainWindow.loadFile("game/room-list/room-list.html");
    //mainWindow.webContents.openDevTools();

    /**
     *Creating empty bar menu. 
     */
    const menu = Menu.buildFromTemplate([])

    mainWindow.setMenu(menu)

    /**
     * Event emited when window is closed.
     */
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

/**
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
app.on("ready", createWindow);

/**
 * Quit when all windows are closed
 */
app.on("window-all-closed", function() {
    app.quit();
});