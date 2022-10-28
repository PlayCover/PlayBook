# Install Prerequisites

You will need to install a few prerequisites before you can build PlayCover:

## 1. Install Xcode
Firstly, you will need Xcode for building PlayCover. Xcode is the editor that Apple created and it is the simplest way to build Swift apps. Keep in mind that it will take a considerable amount of disk space to install it. (Set aside around 30 GB for it).

There are a couple of options for downloading Xcode:

1. Download Xcode from the [App Store](https://apps.apple.com/us/app/xcode/id497799835).

2. Use [Xcodes.app](https://github.com/RobotsAndPencils/XcodesApp) to download and manage your Xcode install(s). (Recommended for more serious development)

## 2. Install Homebrew
Follow the instructions [on Homebrew's homepage](https://brew.sh) to install Homebrew. 

## 3. Install Carthage
Now, open Terminal and run the following command:
```
brew update && brew install carthage
```

## 4. Install SwiftLint
Run the following command in Terminal:
```
brew install swiftlint
```
<br/>

You're now ready to move on to [Building](building.md).