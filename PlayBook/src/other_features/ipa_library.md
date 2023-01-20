# IPA Library
You can use the IPA Library to install apps from `.ipa` sources you have added.

<img width="1000" src="../images/ipa_library_grid.png">

## Adding Sources

To add a source, click on the **Add source** button to enter a valid source link. These may be web based, or local links such as `file:///Users/<myUsername>/Downloads/mysource.json`.

<img width="750" src="../images/ipa_add_source.png">


## Installing Apps 
Installing apps from the IPA Library is easy, simply double click on the app you want to install to add it to your **App Library**.

<img width="1000" src="../images/ipa_downloading.png">

## Managing Sources
If you want to delete a source, you can use the menu in `Menu Bar` > `PlayCover` > `Settings...` > `IPA Sources`. Here you can also add, move, and refresh sources. A green checkmark means the source URL is valid and working properly.

<img width="700" src="../images/settings_ipa_sources.png">

## How to make a source
IPA sources are JSON files which have one entry per app, with the following structure:
```
[
    {
        "bundleID": "xyz.skitty.Aidoku",
        "name": "Aidoku",
        "version": "0.5",
        "itunesLookup": "",
        "link": "https://github.com/Aidoku/Aidoku/releases/download/v0.5/Aidoku.ipa"
    }
]
```
The `itunesLookup` entry is optional, and it may be filled in with an App Store URL, enabling the Library to show the app icon of the corresponding app. The `link` entry must end in `.ipa` to be valid.

Please check our IPA source JSON file [template](https://github.com/PlayCover/PlayBook/blob/master/resources/template_ipa_library.json).

You may use [IPA Source Generator](https://github.com/ohaiibuzzle/PlaySourceTool) to aid you.

###### This information is up-to-date as of PlayCover 2.0.3
