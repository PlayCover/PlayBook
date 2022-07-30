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

## Installing

- Drag PlayCover into your Applications folder. 
- Then double click to open and click `Open` on the system prompt. 
- When you first run the app you may be met with a screen asking to install `Xcode Command Line Tools`. 
    - Press `Install` in the app 
    
        __OR__ 
    - In terminal run the command `xcode-select --install`
- Follow the onscreen instructions to install `Xcode Command Line Tools`.

__NOTE:__ When you start the download for `Xcode Command Line Tools` it may first estimate the time remaining at several hours or days. __This is normal__, it will typically not take anywhere near that time (speed will vary based on your Internet connection). If you're curious why this happens, watch [this](https://youtu.be/iZnLZFRylbs) video by Tom Scott.

## Homebrew Cask
We host a [Homebrew](https://brew.sh) tap with the [PlayCover cask](https://github.com/PlayCover/homebrew-playcover/blob/master/Casks/playcover-community.rb). To install from it:

1. Tap `PlayCover/playcover` with `brew tap PlayCover/playcover`;
2. Install PlayCover with `brew install --cask playcover-community`.

To uninstall:
1. Remove PlayCover using `brew uninstall --cask playcover-community`;
2. Untap `PlayCover/playcover` with `brew untap PlayCover/playcover`.


## Build from Source

You will need:

- [Carthage](https://formulae.brew.sh/formula/carthage)
- Xcode
- An Apple ID

Clone this repo, and open it in Xcode. You have to codesign it with your Apple ID in Xcode. You can do this by going to `Navigator > PlayCover > Signing & Capabilities` and setting the `Provising Profile` to None, and setting the `Team` to your personal Apple ID team.