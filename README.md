# Confabbox Electron SDK

SDK for integrating Confabbox into Electron applications.

Supported Electron versions: >= 11.


## Usage
#### Remote Control

**Requirements**:
The remote control utility requires iframe HTML Element that will load Confabbox.

**Enable the remote control:**

In the **render** electron process of the window where Confabbox is displayed:

#### Screen Sharing

**Requirements**:
The screen sharing utility requires iframe HTML Element that will load Confabbox.

**Enable the screen sharing:**

In the **render** electron process of the window where Confabbox is displayed:

#### Always On Top
Displays a small window with the current active speaker video when the main Confabbox window is not focused.

## Development

To rebuild the native code, use:

    npx node-gyp rebuild

## Publishing

1. Create release branch: `git checkout -b release-1-2-3`, replacing 1-2-3 with the desired release version
2. Increment the version: `npm version patch`, replacing `patch` with `minor` or `major` as required
3. Push to github: `git push`
4. Create PR: `gh pr create`
5. Once PR is merged, create and publish Github release: `gh release create v1.2.3`, replacing v1.2.3 with the desired release version
7. Github action will prebuildify and publish release to npm
