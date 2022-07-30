# Troubleshoot App Login

You may encounter some issue when logging in to some apps and games like Genshin Impact. Follow these instructions to fix that. As always, if you run into issues, ask for help on [Discord](https://discord.gg/rMv5qxGTGC).

__NOTE:__ The instructions below are Genshin Impact specific, but the same process will work for a wide range of apps.

1. Disable SIP
    - First shut down your Mac completely so the screen is black and all other lights are off
    - Press and hold the power button on your Mac until `Loading startup options` appears
    - Select `Options` and continue
    - If prompted, select the correct storage disk
    - Log in with your administrator account 
    - When `Utilities` appears in the menu bar, click on it and choose `Terminal`
    - In the terminal window type `csrutil disable` and type your password when prompted
    - Once `Successfully disabled System Integrity Protection` appears, restart your Mac

2. Modify `nvram boot-args`
    - When you have SIP disabled, type the following:
        - `Command + Space`, type `Terminal` in the search box
    - Type or copy the following command in the terminal window that appears
        - `sudo nvram boot-args="amfi_get_out_of_my_way=0x1 ipc_control_port_options=0"`
    - If it appears that nothing has happened, this is correct.
    - Restart your Mac

3. Login to Genshin
    - Open Genshin Impact with PlayCover, and you should be greeted with a Login button
    - Login to your account, then wait until the door appears and quit the game with `Command + Q`. **DO NOT CLICK/ENTER THE DOOR.**

4. Enable SIP
    - Follow the steps in Step 1 to re-enter startup options
    - When `Utilities` appears in the menu bar, click on it and choose `Terminal`
    - In the terminal window type `csrutil enable` and type your password when prompted
    - Once `Successfully enabled System Integrity Protection` appears, restart your Mac

5. Open Genshin
    - You're done! Enjoy playing Genshin!