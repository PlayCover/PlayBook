# Forking & Making PRs

When creating PRs for PlayCover, there are a couple things to keep in mind.

## General Rules

### 1. Your PR Must be Substantial

Minor spelling corrections or other small fixes that have no bearing on the functionality of the app will largely be rejected. If you are creating a Pull Request, make sure there is a large enough change to warrant it.

### 2. Is your PR Needed?

Make sure that any PR you create is only for a feature that is actively needed. Excess unused features serve only to bloat the codebase. If your feature is deemed out of scope or unnecessary, it will be rejected.

### 3. Check the Project Board & Other PRs

Make sure that the issue that you are working on is not already in progress by someone else. Check both the `In Progress` section of the GH Project Board, and other open PRs to see if someone else is already working on it.

### 4. SwiftLint & Code Quality

Make sure that your code is:

1. In English
2. Passes SwiftLint checks
3. Is of good and readable quality

Failure to meet these requirements will likely result in your PR being rejected, or these issues being raised in a review. If you are writing a particuarly complex piece of code, or something that uses low-level APIs or trickery, document its functionality thoroughly.

### 5. Locale Compliance

If your PR adds any new strings that aren't logs or errors, they must be correctly added to the locale files.

### 6. Presentation & Descriptions

When possible it is recommended to supply a clear description of your PR. If your PR contains UI changes, include screenshots as well.

## Reviews & Merging

It may take some time for your code to be reviewed or merged. Remember, PlayCover is an open-source project, and everyone is contributing out of their own free time. There are therefore periods where there will be no one available to review or merge your code for days or potentially weeks. Remain patient, it will be looked at in time.

When you receive a review, make sure to courteously and professionally respond to concerns or feedback. Always keep your responces in line with the [Code of Conduct](./code_of_conduct.md). Failure to compile with these rules will result in your PR getting rejected, and potentially having any future contributions banned.

After a few smaller scale PRs (Minor tweaks, UI fixes, etc...), you may recieve a `Minor Contributor` role in the [Discord](https://discord.gg/rMv5qxGTGC) which will also give you access to `#contributors-chat`. 

Larger PRs (Major refactors, implementing core features, etc...), may grant you the role of `Major Contributor`.

All contributors are credited on the [website](https://playcover.io/contributors/).