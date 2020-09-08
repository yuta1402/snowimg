import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let win: Electron.BrowserWindow | null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 540,
    frame: false,
    transparent: true,
    resizable: false,
    fullscreenable: false,
    alwaysOnTop: true,
  });

  // win.setMenu(null);

  win.loadFile(path.join(__dirname, "index.html"));

  // win.setIgnoreMouseEvents(true, {
  //   forward: false,
  // });

  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
};

app.on("ready", () => {
  // hide dock for mac
  if (process.platform === "darwin") {
    app.dock.hide();
  }

  setTimeout(createWindow, 500);
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
