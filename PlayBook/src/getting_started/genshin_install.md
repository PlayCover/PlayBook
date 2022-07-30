# Extra Install Instructions for Genshin Impact

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
        - `sudo nvram boot-args="amfi_get_out_of_my_way=1"`
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

## Video Instructions

The above steps are shown in the following video:

[How to play Genshin Impact using PlayCover on your M1 Mac (2020 or newer)!](https://www.youtube.com/watch?v=ZRmCjkS3UZE)