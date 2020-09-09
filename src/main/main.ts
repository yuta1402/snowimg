import { app, BrowserWindow, screen } from "electron";
import * as path from "path";
import * as url from "url";

let win: Electron.BrowserWindow | null;

const createWindow = () => {
  const bounds = screen.getPrimaryDisplay().bounds;

  win = new BrowserWindow({
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height,
    frame: false,
    transparent: true,
    skipTaskbar: true,
    alwaysOnTop: true,
  });

  // win.setMenu(null);

  win.loadFile(path.join(__dirname, "index.html"));

  // win.maximize();

  win.setIgnoreMouseEvents(true, {
    forward: false,
  });

  win.setHasShadow(false);

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
