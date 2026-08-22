# Microphone Permission

Some iOS apps expect the microphone permission callback to run synchronously. On
macOS, the normal permission request can complete asynchronously, which may cause
an app to report that microphone access is unavailable even when access has been
granted in System Settings.

## Before troubleshooting

1. Open **System Settings > Privacy & Security > Microphone**.
2. Allow microphone access for PlayCover and the affected app, if it is listed.
3. Quit the app completely, then launch it again from PlayCover.

If the app still reports that microphone access is unavailable, open the app's
settings in PlayCover and select the **Bypasses** tab. Enable **Check Microphone
Permission Synchronously**, save the settings, and restart the app.

This option is unrelated to **Enable Jailbreak Bypass**. Enabling jailbreak
bypass does not change how microphone permission callbacks are handled.

## If the option is missing

The synchronous microphone permission option requires matching PlayCover and
PlayTools versions. It is not available in PlayCover 3.1.0. Install a newer
trusted build that includes both the PlayCover setting introduced by
[PlayCover PR #1930](https://github.com/PlayCover/PlayCover/pull/1930) and the
corresponding PlayTools hook introduced by
[PlayTools PR #193](https://github.com/PlayCover/PlayTools/pull/193).

Avoid applying byte-level patches copied from another app version. Executable
offsets and instruction sequences can change between releases, and modifying an
app binary invalidates its existing code signature.

## Confirming the fix

A successful permission prompt alone does not prove that audio capture started.
Test the app's voice feature and confirm that an input-level indicator responds
or that another participant can hear the microphone. If the app still fails,
recheck the selected input device in macOS and repeat the test without Bluetooth
audio to rule out device-routing issues.
