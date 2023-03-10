# Common Issues

## Key presses are not working or getting stuck, but mouse clicks are working

>__Note__: Most keymapping issues will fix themselves when you update to macOS Ventura 13.1 or newer. You can ignore the following information if you have the update installed already. If you are still having issues after updating, check the issues in [_PlayTools_](https://github.com/PlayCover/PlayTools) and [_PlayCover_](https://github.com/PlayCover/PlayCover/issues) before opening a new one. You may create a support post in the [_Discussion forums_](https://github.com/PlayCover/PlayCover/discussions) or the [_PlayCover Discord_](https://discord.gg/rMv5qxGTGC) for further help.

Occasionally, keymaps may become unresponsive on macOS versions older than 13.1. This may occur if you use `command ⌘` + `tab` to quickly switch between apps before unlocking your mouse, or may occur randomly for no apparent reason. This issue will resolve itself if you update to macOS Ventura 13.1 or newer, but if you are unable to, here are steps you can try as a temporary fix:

1. Press `option ⌥` to release the mouse, and then press `option ⌥` again to enable keymapping. You may have to do this a couple times to regain control.
2. Use `command ⌘` + `K` to open the Keymapping Editor, and press `command ⌘` + `K` again to close it.
3. If the above doesn't work, restart the app.
4. If it still doesn't work after restarting the app, save any work you have open and restart your Mac. 

## Key presses are working, but don't touch where you want in-game

This is likely caused by using a keymap file not made for your app's aspect ratio. There are multiple ways to solve this problem:
* You can change the aspect ratio to one that matches the keymap by going to your app settings (see [Graphics](../settings/graphics.md))
* Try importing a different keymap that matches your aspect ratio
* Open the Keymapping Editor in-game by pressing `command` + `K` and manually move the buttons into their correct positions (see [Using & Making Keymaps](../keymapping/using_making_keymaps.md)) 

## Mouse input lagging or camera zooming in and out randomly in-game 

This issue may occur with some more demanding games (such as Genshin Impact) and can be caused by many different reasons.

| Issue | Solution | 
| ---- | ---- |
| Camera stuttering and/or input lag when using external mouse | Delete the circle shaped mouse input and add the rounded square mouse control area. See [Using & Making Keymaps](../keymapping/using_making_keymaps.md) for more info. |
| Camera stuttering and/or input lag when using Low Power Mode | Turn off Low Power Mode, it is known to hinder performance in more demanding games when playing at 60 FPS or higher. You can also try keeping Low Power Mode enabled but lowering the FPS cap to 30. | 
| Camera stuttering and/or input lag when playing at high resolutions or graphical settings | Your Mac might not be powerful enough to handle these settings smoothly. You can try the following: reducing the resolution from app settings, selecting an older iPad identifier, or lowering graphical settings in-game. For more info, see [Graphics](../settings/graphics.md). |
| Camera stuttering and/or input lag when using playing games on older versions of PlayCover (1.1.1 and before) | Legacy versions of PlayCover are no longer supported and the majority of bugs are fixed in newer builds. You can update to the [latest version of PlayCover](https://github.com/PlayCover/PlayCover/releases/latest). |
| Camera randomly zooms in and out when trying to move the character | Try restarting the game or reducing the size of the WASD input area. See [Using & Making Keymaps](../keymapping/using_making_keymaps.md) for more info. |

>__Note__: If you still have issues after trying these solutions, or if you encounter problems not listed here. You can check if the issue has been reported already in [_PlayTools_](https://github.com/PlayCover/PlayTools) and [_PlayCover_](https://github.com/PlayCover/PlayCover/issues), if not, you can open a new bug report. Additionally, you may create a support post in the [_Discussion forums_](https://github.com/PlayCover/PlayCover/discussions) or the [_PlayCover Discord_](https://discord.gg/rMv5qxGTGC) for further help.

## Screen turns sideways or not in the expected orientation 

Some apps may rotate the display area incorrectly when you click on certain in-game buttons. Normally on a phone, these buttons require you to hold it in portrait orientation instead of landscape.

For example: clicking on the **View** button in the Valkyrie menu in Honkai Impact 3rd. 

<img width="400" src="https://user-images.githubusercontent.com/78054566/212759243-396b07a3-775b-44b7-b620-a11e3f1ce608.png">

When this happens, you can try these steps to fix it without having to restart the app.

<img width="300" src="https://user-images.githubusercontent.com/78054566/212760148-597aaaa9-56c5-4a61-b010-a2b20ad4bafe.png">

1. Press `command ⌘` + `R` to rotate the window, you can also do this by clicking on `Menu bar` > `Keymapping` > `Rotate display area`.
2. If doing the above does not work for the first time, keep pressing `command ⌘` + `R` until the app returns to its correct orientation.
3. If the issue still remain after these steps, restart the app.

>__Note__: This feature is only meant to fix rotation issues while the app is running. The rotation you selected will not be saved when you close the app.

###### This information is up-to-date as of PlayCover 2.0.4
