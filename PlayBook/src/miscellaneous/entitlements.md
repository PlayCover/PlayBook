# Configuring Entitlements for Jailbreak Bypass

PlayCover contains a set of rules to be used on an app under `PlayCover/Rules` in the source code and `PlayCover.app/Contents/Resources` in the built app. There is a default rule named `default.yam` and there may be rules meant for specific apps, case in which they will be named after their bundle id as `com.mycompany.myapp.yaml`.

An app will use the set of rules meant for it, or the default set if the former one does not exist.

## Rules structure
A [rules file](https://github.com/PlayCover/PlayCover/blob/2.0.2/PlayCover/Rules/default.yaml) contains four sections, which can be sorted into two types:

`blacklist`, `whitelist` | `allow`, `bypass`

The first two work on **files**, while the last ones work on **sandbox rules**.

Here is what the sections do:
`blacklist` blocks **files** (not directories) from being accessed.
`whitelist` allows writing to files **outside** default paths to be written to.
`allow` are rules that are always applied.
`bypass` are rules that are applied when JB Bypass is enabled.

Sandbox rules in `allow` are **always** added into the entitlements, regardless of the status of Jailbreak Bypass. The other ones are only active when JB Bypass is turned on.

By default the app will only get write permissions to its container and its executable. However, it gets full permission to run user-perm Unix-y stuff like forking which is disabled on iOS. It can read more files on the system, as with PlayCover, those apps are Catalyst apps and thus **native to macOS**, not iOS.

## Identifying files and sandbox rules worth adding

