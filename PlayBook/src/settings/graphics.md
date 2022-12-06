# Graphics

![Graphics](../images/graphics_settings.png)

### iOS Device

This controls the Model Identifier that PlayCover will report to the running app. Essentially this decides what device the app *thinks* it is running on. Apps can have device specific optimisations, so adjusting this value can lock/unlock certain features.

For most applications, iPad identifiers are preffered over iPhone identifiers, however there are a few iPhone options available.

M1 MacBook Airs may suffer from thermal issues when running intensive applications like Genshin Impact with the M1 iPad identifier. It is therefore recommended to use the A12Z identifier if thermals are a concern.

For every other Apple Silicon device and most applications, we recommend the M1 iPad identifier, as this usually provides the best experience.

### Resolution

1. App Default

    This will leave the window size up to the application, which may not always be desirable.
2. Auto (Based on Display)

    This will attempt to match the window size to your display's resolution.
3. 1080p/1440p/4K

    This sets the window size to a standard resolution at either a 4:3, 16:9, or 16:10 aspect ratio. Most MacBook built in displays are 16:10.
4. Custom

    This lets you set a completely custom resolution. Please note that some extreme aspect ratios or sizes may cause compatability or performance issues.

### Disable display sleep

This prevents your display from going to sleep while the app is running, which can be helpful for streaming apps like Netflix.