---
author: NuclearPhoenix
title: 'Mini SiD Revision 4.1'
date: 2024-03-01 13:00:00 +0200
last_modified_at: 2024-03-01 13:00:00 +0200
categories: announcements, project-update, hardware
---

Just updated the GitHub repository for the Mini SiD for a smaller revision 4.1 launch.
This new board version is mostly a board layout and design update, but there are also a number of other changes that improve on the previous version.

Here are some images of the new PCB. This time I chose black with ENIG to align with the latest Open Gamma Detector revision:

![PCB Front](/assets/images/posts/mini-sid1.png)

![PCB Back](/assets/images/posts/mini-sid2.png)

**Changelog:**

- Decreased size of the electronics section. Board partitioning is now 50:50 electronics and scintillator.
- New voltage reference chip: This change improves the input voltage range down to 3.1 Volts and decreases power consumption by about 1mA @ 5V.
- Changed location of the SiPM input protection diodes to the comparator only. Prevents clamping of the raw signal if you need it.
- Added AC coupling with PZC component to the comparator input.
- Larger bulk decoupling caps and higher voltage rating for the 100nF MLCCs.

These changes should make the device even more useful while still holding true to the form factor and remaining cheap to build due to the single sided components and part selection. Also, the new silk screen and PCB layout in general are _a lot_ cleaner now. On top of that, the decrease in power consumption is also very nice to have. Let me know what you think!

**Check it out on GitHub:**

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/Mini-SiD){: .btn .btn--primary .btn--large}
