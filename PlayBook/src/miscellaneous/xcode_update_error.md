# Issues after an Xcode Update

After updating or installing Xcode, you may get an error saying `Not in Application folder` or something to the sort. You can fix this using one of these things:

### Method 1
- Launch the Terminal App.
- Enter the following command `sudo xcrun cc`.
- Enter your password when prompted(You will not be able to see your password being typed).

### Method 2
- Open Xcode.
- Accept Apple ToS and License.
- Launch the Terminal App.
- Copy paste the following command `sudo xcodebuild -license accept`.
- Enter your password when prompted.

### Method 3
- Launch the Terminal App. 
- Copy paste the following command `sudo xcodebuild -runFirstLaunch`.
- Enter your password when prompted.

### Method 4
- Open System Preferences.
- Go to Software Updates.
- Check for Command Line Tools updates.
- Try method 3 again.
