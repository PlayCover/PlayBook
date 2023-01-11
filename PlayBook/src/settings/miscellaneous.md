# Miscellaneous

![Misc](../images/misc_settings.png)

### Enable Discord activity

This option enables/disables Discord RPC, which allows you to display the games you're playing in PlayCover in your Discord status seamlessly. If you wish to further customise the appearence of this status, you can use the `Custom Discord activity` values.

### Metal 3 Performance HUD (macOS 13+)

<img width="1105" alt="Screenshot 2023-01-11 at 2 55 06 PM" src="https://user-images.githubusercontent.com/78054566/211905075-36179ebd-a69b-447c-b016-ff069d5e0779.png">

This feature utilises the new Metal 3 Performance HUD to provide you with frame rate, GPU, CPU, and Memory utilisation percentages. This can be useful for benchmarking the performance of games. To show or hide the HUD in-game, you must toggle it in the app settings while the app is closed.

<img width="207" alt="Screenshot 2023-01-11 at 2 57 45 PM" src="https://user-images.githubusercontent.com/78054566/211905384-692eee50-6380-4e78-b22d-49251642a6c1.png">

The following table will explain the HUD elements

| Example | Description |
| :-----------: | ------------- |
| `Apple M1` | Shows the name of the Apple Silicon chip. |
| `[2668x1688]` | Default app resolution. |
| `1.9x` | Resolution scaling, `1.0x` is equal to native resolution of the display. >`1.0x` means the app resolution is less than the display, and <`1.0x` means it is more than the display resolution. |
| `Composited` | How the app is rendered to display, can be `Composited` or `Direct`. |
| `60Hz` | The refresh rate limit supported by your display. |
| `FPS: 60.00` | Average frames per second, the numbers in the brackets indicate min and max values recorded in the interval of the graph, however, FPS is not shown as a line on the graph. This number should be equal to the refresh rate of your display. |
| `Pre: 16.67` | Average frame time, or the amount of time it takes (in milliseconds) to render each frame. The numbers in the brackets indicate min and max values recorded in the interval of the graph. Frame time is shown as a blue line on the graph, a flat line indicates consistent frame time. |
| `GPU: 10.97` | Average GPU utilization, the numbers in the brackets indicate min and max values recorded in the interval of the graph. GPU utilization is shown as a green line on the graph. GPU usage may fluctuate during gameplay, this is normal as long as FPS and frame time are consistent. |
| `Mem: 1.57GB` | Average RAM usage, the green numbers in brackets likely indicates VRAM usage. |

>__Note__: This feature is only available on macOS 13 (Ventura) or newer, and only works on certain apps such as games.

###### This information is up-to-date as of PlayCover `2.0.2`
