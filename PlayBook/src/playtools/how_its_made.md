# How It's Made

> Here be dragons. PlayTools code is complicated, messy, and largely undocumented. We are working to improve the quality of the code base over time but be aware, **is is not easily understood.**

## What even is PlayTools?

PlayTools is a dynamic library or `.dylib` that adds all sorts of fun features to your favourite apps and games like custom window resolution, custom keymapping, compatability fixes, and more. We accomplish this by **injecting** a PlayTools load command into the target executable.

## What's a load command?

Executables on macOS/iOS etc... use the MachO file format. There are lots of guides available delving deep into the structure of this format which can get quite complicated and technical. Long story short, MachO executables are divided up into various sections. One of those sections defines the dynamic libraries that the executable needs to run. This would include stuff like `SwiftUI` or `AppKit` or any other sort of external pre-compiled dependancy or framework not included in the app's bundle. To get the target app to therefore load PlayTools, we simply need to add a load command *for* PlayTools. We achieve this using a tool called [optool](https://github.com/alexzielenski/optool).

## Great. Now what?

Loading the `.dylib` isn't enough to actually get our code to do anything. Because the target application isn't going to actually call any of PlayTools' functions of its own volition, we need to create an entry point for ourselves. Enter `NSObject`. `NSObject` is handy because it has a couple of functions we can use to start our code right as the application starts with the main binary, namely the `load`, `init`, and `initialize` functions. PlayTools utilises these functions to start up many of our tools.

## Main Features

### Custom Resolution

Custom resolution is intialized in `NSObject+Swizzle.m` in the `NSObject.load` function. We accomplish this by swizzling 3 methods:

```objc
[objc_getClass("FBSSceneSettings") swizzleInstanceMethod:@selector(frame) withMethod:@selector(hook_frame)];
[objc_getClass("FBSSceneSettings") swizzleInstanceMethod:@selector(bounds) withMethod:@selector(hook_bounds)];
[objc_getClass("FBSDisplayMode") swizzleInstanceMethod:@selector(size) withMethod:@selector(hook_size)];

- (CGRect) hook_frame {
    return [PlayScreen frame:[self hook_frame]];
}

- (CGRect) hook_bounds {
    return [PlayScreen bounds:[self hook_bounds]];
}

- (CGSize) hook_size {
    return [PlayScreen sizeAspectRatio:[self hook_size]];
}
```

These methods allow us to define a custom size for the window resolution. See `PlayScreen` for more details on how these functions work.

### Keymapping Menu Bar

The `Keymapping` menu bar is created in `NSObject+Swizzle.m` in a hooked `NSObject.init` function.

```objc
- (id) hook_init {
    if ([[self class] isEqual: NSClassFromString(@"_UIMenuBuilder")]) {
        [PlayCover initMenuWithMenu: self];
    }
    
    return self;
}
```

This will wait until the `NSObject` inherited class it is running on is `UIMenuBuilder` at which point it will pass itself to `PlayCover` to created the additional menu bar item. The menu bar items themselves are created using in Catalyst with `UIKit`.
