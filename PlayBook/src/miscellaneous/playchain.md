# What is PlayChain?

PlayChain is a PlayCover component that provides apps sideloaded with PlayCover access to an Apple Keychain-like system to store secrets

Normally, self-signed apps (eg. Apps installed with PlayCover) are not given the entitlements needed to use macOS's existing keychain facilities. This is due to Apple gating keychain behind the `com.apple.application-identifier` and `teamID` entitlements for iOS/macCatalyst apps. Self-signed apps don't have these valid values.

PlayChain swaps out the system keychain facilities with one provided by PlayCover, allowing these operations to (partially, anyway) succeed

# Why PlayChain?

PlayCover 2 and older required the user to relax AMFI restriction on unsigned code in order to provide Keychain access. This was necessary due to the fact that it essentially signs the app with the "correct" team ID, but otherwise invalid signatures to gain access to the system keychain facilities. 

While this method worked, relaxing AMFI also comes with the side effect that the system will be more vulnerable to attacks (as macOS's signature enforcement is basically turned off) and there is no guarantee that the app will keep working after AMFI is turned back on (because the app will be denied from keychain access)

PlayChain allows apps to have partial access to Keychain services without changing any of these security settings.

# How to PlayChain?

PlayChain can be enabled for each individual app by going to their Settings > Bypasses > Enable PlayChain

The app's Keychain entries will now exist at the PlayCover container folder > PlayChain > [bundle ID]

PlayChain debugging can also be turned on in order to debug both the system (with AMFI turned off) or PlayChain behaviors if necessary. Logs are written to the system log (accessible via the Apple Console app)

# What can PlayChain do?

At a minimum, PlayChain allows apps to:
- Store and access values such as login tokens or device identifiers correctly when AMFI is enabled
- Persist values through sessions

# What **can't** PlayChain do?

- Bypassing jailbreak/anticheat checks imposed by apps.
- Fully replacing Apple Keychain (we need to put more work hours into it)
- Creating a one-time-usable smoke screen on your Mac portables (not guaranteed)
