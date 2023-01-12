# Troubleshoot App Login Issues

Follow these instructions to fix issues preventing you from logging in to apps like Genshin Impact. As always, if you run into issues not covered in the documentation, you can ask for help on the [PlayCover Discord Server](https://discord.gg/rMv5qxGTGC).

>__Note__: The instructions below use Genshin Impact as an example, but the same process will work for a wide range of apps.

1. Disable SIP (System Integrity Protection)
    - First shut down your Mac completely so the screen is black and all other lights are off
    - Press down and hold the power/Touch ID button until `Loading startup options` appears
    - Select `Options` and continue
        - If prompted, select the correct storage disk
    - Log in with your administrator account 
    - When `Utilities` appears in the menu bar, click on it and choose `Terminal`
    - In the terminal window type `csrutil disable` and type your password when prompted
    - Wait for `Successfully disabled System Integrity Protection` to appear, then restart your Mac

2. Modify `nvram boot-args`
    - After disabling SIP, log back in to your macOS account
    - Press `command ⌘` + `space bar` to open Spotlight Search and type in `terminal`
    - Open the Terminal app, then copy and paste the following:
        - `sudo nvram boot-args="amfi_get_out_of_my_way=0x1 ipc_control_port_options=0"`
    - If prompted, authenticate with your password 
    - If it appears that nothing has happened, this is normal
    - Restart your Mac

3. Login to Genshin Impact
    - Open PlayCover
    - Open Genshin Impact and you should be greeted with a login screen
    - Log in to your account and complete the captcha as required
    - **DO NOT ENTER WHEN THE DOOR APPEARS**[^1]
    - Close the game using `command ⌘` + `Q` to avoid accidentally entering the door

4. Re-enable SIP
    - Follow the steps in Step 1 to re-enter startup options
    - When `Utilities` appears in the menu bar, click on it and choose `Terminal`
    - In the terminal window type `csrutil enable` and type your password when prompted
    - Wait for `Successfully enabled System Integrity Protection` to appear, then restart your Mac[^2]

5. Open Genshin Impact
    - You're done! Enjoy playing Genshin!

If you have tried this and still cannot login, try `sudo nvram boot-args="amfi_get_out_of_my_way=1"` as boot-args instead of the ones above. You can also try deleting any items related to your game in Keychain Access (type `keychain access` in Spotlight Search to open it), as well as enabling jailbreak detection bypass in your app settings. Additional login issues may be solved by clearing app preferences.

If your app still does not work, you can [open an app/game support request](https://github.com/PlayCover/PlayCover/issues/new/choose) if no one else has done so already.

[^1]: If you enter the door while SIP is disabled, you will not be able to login to the game when you re-enable SIP afterwards. If you have accidentally entered the door, you can try deleting Genshin related items in Keychain Access (search for `genshin` and `mihoyo`), then repeating the troubleshooting process from step 1.

[^2]: The changes we made with the `nvram boot-args` command earlier will be disabled when SIP is on, however macOS will remember that we made those changes and will apply them the next time you disable SIP. Fully reverting these changes isn't neccassary for most users, but you can do so by running `sudo nvram boot-args=""` in the macOS terminal. 

###### This information is up-to-date as of PlayCover `2.0.2`
