# Install Prerequisites

We're gonna need a few things on your computer before we can build PlayCover:

## 1. Install Xcode
Firstly, you will need Xcode for building PlayCover. Xcode is the editor that Apple created and it is the simplest way to build Swift apps. Keep in mind that it will take a considerable amount of disk space to install it. (Set aside around 30 GB for it).

Option 1: Download Xcode from it's [App Store Listing](https://apps.apple.com/us/app/xcode/id497799835).

Option 2 (Recommended for more serious development): Use [Xcodes.app](https://github.com/RobotsAndPencils/XcodesApp) to download and manage your Xcode install(s).

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

Now you're ready to move on to [Building](building.md)