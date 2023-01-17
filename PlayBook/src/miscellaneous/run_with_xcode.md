# Running Apps with Xcode

In some cases apps won't run with SIP enabled because they cannot access certain frameworks which are only available to properly signed apps.

Some of this frameworks may be accessed with SIP enabled if PlayCover is compiled and running through an Xcode instance. Such is the case of OpenGL ES, which is required by games like Arknights, being fully usable under these circumstances.