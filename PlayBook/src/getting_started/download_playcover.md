# Download & Install PlayCover

## Prerequisites

At the moment, PlayCover can only run on Apple Silicon Macs. Devices with the following chips are supported:

* M1
* M1 Pro
* M1 Max
* M1 Ultra
* M2

If you have an Intel Mac, you can explore alternatives like Bootcamp or emulators.

## Download

You can download stable releases [here](https://github.com/PlayCover/PlayCover/releases), or build from source by following the instructions below.

![Releases](../images/releases.png)
> __NOTE:__ The release number in the image may not match the most recent release.

## Installing

- Drag PlayCover into your Applications folder. 

<img src="../images/playcover_dmg.png" alt="Drag PlayCover in Applications" width="80%">

- Then double click to open and click `Open` on the system prompt. 

<div style="display:flex;">
<img src="../images/open_playcover.png" alt="Open PlayCover" width="70%" height="70%" style="align-self:start;">

<img src="../images/open_prompt.png" alt="Open Prompt" width="40%" style="align-self:start;">
</div>

- When you first run the app you may be met with a screen asking to install `Xcode Command Line Tools`. 
    - Press `Install` in the app
    ![Install Prompt](../images/install_prompt.png)
    - Authenticate with Touch ID

    <img src="../images/auth_prompt.png" alt="Auth" width="50%">

    - Wait for the installation to finish (This make take some time depending on your internet speed)

> If the in-app Xcode Command Line Tools install fails follow the steps listed [here](./alt_xcode_cli_install.md).

## Homebrew Cask
We host a [Homebrew](https://brew.sh) tap with the [PlayCover cask](https://github.com/PlayCover/homebrew-playcover/blob/master/Casks/playcover-community.rb). To install from it:

1. Tap `PlayCover/playcover` with `brew tap PlayCover/playcover`;
2. Install PlayCover with `brew install --cask playcover-community`.

To uninstall:
1. Remove PlayCover using `brew uninstall --cask playcover-community`;
2. Untap `PlayCover/playcover` with `brew untap PlayCover/playcover`.