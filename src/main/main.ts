import { app, BrowserWindow, screen } from "electron";
import { Tray, Menu } from "electron";
import * as path from "path";
import * as url from "url";

let tray: Electron.Tray | null;
let win: Electron.BrowserWindow | null;

const createTray = () => {
  tray = new Tray(path.join(__dirname, "/img/trayicon.png"));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "終了",
      click: () => {
        if (win !== null) {
          win.close();
        }
      },
    },
  ]);

  tray.setContextMenu(contextMenu);
};

const createWindow = () => {
  const bounds = screen.getPrimaryDisplay().bounds;

  win = new BrowserWindow({
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height,
    frame: false,
    transparent: true,
    skipTaskbar: false,
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

  createTray();
  setTimeout(createWindow, 500);
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
