# Download & Install PlayCover

## Prerequisites

PlayCover only works on **Apple Silicon Macs**. The minimum hardware requirement is an Apple M1 chip, but PlayCover will also work on all Apple Silicon chips released after the M1.

If you have an Intel Mac, you can explore alternatives like Bootcamp or emulators.

## Download

You can download the latest stable release from [Github](https://github.com/PlayCover/PlayCover/releases/latest) or [Gitee](https://gitee.com/playcover_community/PlayCover/releases), or download the [latest nightly version](https://nightly.link/playcover/playcover/workflows/2.nightly_release/develop) to test out experimental features before they are added to the stable release. 

You can also [build from source](https://docs.playcover.io/building_from_source/install_prerequisites) if you wish to make contributions to PlayCover.

## Installing

- Drag PlayCover into your Applications folder. 

<img src="../images/playcover_dmg.png" alt="Drag PlayCover in Applications" width="80%">

> __Note__: PlayCover won't work if it isn't in the Applications folder.

- Then double click to open and click `Open` on the system prompt. 

<div style="display:flex;">
<img src="../images/open_playcover.png" alt="Open PlayCover" width="70%" height="70%" style="align-self:start;">

<img src="../images/open_prompt.png" alt="Open Prompt" width="40%" style="align-self:start;">
</div>

## Homebrew Cask
We host a [Homebrew](https://brew.sh) [tap](https://github.com/PlayCover/homebrew-playcover) with the [PlayCover cask](https://github.com/PlayCover/homebrew-playcover/blob/master/Casks/playcover-community.rb) for stable releases `playcover-community`, as well as the casks for prereleases `playcover-prerelease` and nightlies `playcover-nightly`.

To install:
1. Tap `PlayCover/playcover` with `brew tap PlayCover/playcover`;
2. Install PlayCover with `brew install --cask playcover-community`.

To uninstall:
1. Remove PlayCover using `brew uninstall --cask playcover-community`;
2. Untap `PlayCover/playcover` with `brew untap PlayCover/playcover`.

###### This information is up-to-date as of PlayCover 2.0.2
