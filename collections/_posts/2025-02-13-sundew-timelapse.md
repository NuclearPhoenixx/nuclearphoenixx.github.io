---
author: NuclearPhoenix
title: 'New Timelapse Project!'
date: 2025-02-13 21:00:00 +0200
last_modified_at: 2025-02-13 21:00:00 +0200
categories: announcements showcase carnivorous-plants

header:
  image: /assets/images/posts/canivore-thumb.jpg
  caption: 'D. madagascariensis, Copyright 2025 NuclearPhoenix.'

toc: true
toc_sticky: true
---

## Introduction

Let me introduce you to my newest small project: I'm combining my love for carnivorous plants with my passion for tinkering with things, resulting in a timelapse photography setup to observe the intricate movement of the plants after contact with prey, such as insects. In this very first test pass, I've already learned a lot of things, but nevertheless the timelapse looks beautiful, nevermind the multiple repositionings due to the plant itself moving and growing in our way. 😉

I've uploaded the result to Youtube already, and another one that's already much better will follow soon! For this I've simply taken my Drosera madagascariensis (sundew native to Africa) and put a dead fly on one of its leaves.

{% include video id="GlIcrZ2fjdo" provider="youtube" %}

In total, the timelapse took around 10 days. Over the course of the video you can clearly see the digestion process starting some time after it detects the insect, slowly dissolving nutrients from it. Interestingly, the first tentacles snatched onto the insect extremely quickly, in just one or two minutes at most, which was much faster than I anticipated! After that, it took quite some time for the plant to start moving more and to start the digestion process, so I guess it was checking out wheter it's digestible or not before expending the energy to move. From what I can tell, it took around 5 days until there was no more movement visible and no more fluid around the prey, so my best guess is that from this point on, it had already been fully digested.

## Behind The Scenes

### Setup

The setup is extremely basic and cheap. The core components are an ancient Raspberry Pi Zero W (yes, the original one, revision 1.1!), and a Raspberry Pi Camera Module 2 (the almost-10-year-old sensor module). I then 3D printed a couple of parts for the camera to mount onto a flexible camera mount. The neat thing about the old camera module is that you can easily get focus on extremely close-up objects by turning the lense. A more modern camera with a powered autofocus would be better, obviously, due to the ease of use alone. However, these tend to not focus at close enough distances and easily get very expensive. Typically, the distance between the lense and the plant is ~3cm in my case. That is enough to have a neat FOV on the entire plant at 1440p.

![Overall setup](/assets/images/posts/madagascariensis_timelapse1.jpg)

![Close up of the setup](/assets/images/posts/madagascariensis_timelapse2.jpg)

Something to watch out for, in this case, is the plant grows and moves really quickly, and depending on the angle and distance to the point of interest, I need to adjust the focus every couple of hours. I also have to choose an appropriate leaf for the timelapse in order to prevent the plant growing in front of the camera like in my first test! :D

I've also encountered the camera white balance being waaay off from time to time, painting the entire image in a red-pink hue. It seems to be at least partially connected to the lense, because it gets worse the closer I focus the image (together with the vignetting). The way I'm currently using it, I set the auto white balance to "indoors", so I probably need to manually assign it a constant one-time white balance.

### Code

On the Pi itself, I've created a short Python script that shoots just a single photo if nothing goes wrong. The script is simply called via a cron entry (crontab) once every minute. All of the other logic in the script is just there to make it more resilient to crashes. If there is an error while shooting a photo, it checks if it has been recently rebooted and if not, it does a quick reboot. This is quite a brute-force method, but it works with minimal downtime.

<!--
```python
#!/usr/bin/env python3
import os
import time
import subprocess
from datetime import datetime

def has_already_restarted():
    return os.path.exists("/tmp/camera_restart_status")

def mark_as_restarted():
    with open("/tmp/camera_restart_status", "w") as f:
        f.write("restarted")

def capture_image():
    try:
        timestamp = int(time.time())
        output_path = f"./timelapse/{timestamp}.jpg"
        command = [
            "libcamera-still", "--output", output_path, "--awb", "indoor", "--hdr", "auto", "-q", "100",
            "--height", "1440", "--width", "2560", "--brightness", "0.1"
        ]
        result = subprocess.run(command, check=True, capture_output=True, text=True)
        print(f"Success: {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error: {e.stderr}")
        return False
    return True

def main():
    if not capture_image():
        if has_already_restarted():
            print("Error: Camera still not working, no longer rebooting.")
        else:
            print("Error! Rebooting Pi...")
            mark_as_restarted()
            os.system("sudo reboot")
    else:
        if has_already_restarted():
            os.remove("/tmp/camera_restart_status")

if __name__ == "__main__":
    main()
```
-->

<script src="https://gist.github.com/NuclearPhoenixx/32dd657c5549f3b155aaf3bf599dfdea.js"></script>

All of the photos are put into a folder, which are then used to generate the timelapse video with ffmpeg, so pretty simple.

## Outlook

I will be doing some more timelapse videos and close-up photos of this particular plant, and then move on to other carnivorous plants that I own and that are known to move in order to "deal" with prey. This includes D. rotundifolia, D. adelae, D. binata, and several butterworts (Pinguicula).

Please let me know in the comments what you think about this project and maybe also other plants that might be interesting to watch! ❤️
