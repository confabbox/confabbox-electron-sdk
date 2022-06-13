const electron = require('electron');
const { BrowserWindow } = electron;
const popupsConfigRegistry = require('./PopupsConfigRegistry');
const { testMatchPatterns } = require('./functions');
const { popupConfigs } = require('./constants');

/**
 * Initializes the popup configuration module.
 *
 * @param {BrowserWindow} confabboxWindow - The window where confabbox is
 * rendered
 */
function initPopupsConfiguration(confabboxWindow) {
    popupsConfigRegistry.registerPopupConfigs(popupConfigs);

    // Configuration for the google auth popup.
    confabboxWindow.webContents.on('new-window', (
            event,
            url,
            frameName,
            disposition,
            options) => {
        const configGoogle
            = popupsConfigRegistry.getConfigByName('google-auth') || {};
        if (testMatchPatterns(url, frameName, configGoogle.matchPatterns)) {
            event.preventDefault();
            event.newGuest = new BrowserWindow(Object.assign(options, {
                titleBarStyle: undefined,
                webPreferences: {
                    contextIsolation: true,
                    enableBlinkFeatures: undefined,
                    enableRemoteModule: false,
                    nodeIntegration: false,
                    preload: false,
                    webSecurity: true
                }
            }));
        }

        const configDropbox
            = popupsConfigRegistry.getConfigByName('dropbox-auth') || {};

        if (testMatchPatterns(url, frameName, configDropbox.matchPatterns)) {
            event.preventDefault();
            event.newGuest = new BrowserWindow(Object.assign(options, {
                    titleBarStyle: undefined,
                    webPreferences: {
                        contextIsolation: true,
                        enableBlinkFeatures: undefined,
                        enableRemoteModule: false,
                        nodeIntegration: false,
                        preload: false,
                        webSecurity: true,
                        sandbox: true
                    }
                }));
        }
    });
}

module.exports = initPopupsConfiguration;
