const React = require('react');
const { Code, ContentSlide, Step } = require('react-presents');

const code = `const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
`;

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1}>
      <Code
        codeMirrorOptions={{
          mode: 'javascript',
          readOnly: 'nocursor'
        }}
        value={code}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'main.js';

module.exports = slide;
