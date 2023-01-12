# Main Features

## Custom Resolution

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

## Keymapping Menu Bar

The `Keymapping` menu bar is created in `NSObject+Swizzle.m` in a hooked `NSObject.init` function:

```objc
[self swizzleInstanceMethod:@selector(init) withMethod:@selector(hook_init)];

- (id) hook_init {
    if ([[self class] isEqual: NSClassFromString(@"_UIMenuBuilder")]) {
        [PlayCover initMenuWithMenu: self];
    }
    
    return self;
}
```

This will wait until the `NSObject` inherited class it is running on is `UIMenuBuilder` at which point it will pass itself to `PlayCover` to created the additional menu bar item. The menu bar items themselves are created using in Catalyst with `UIKit`.
