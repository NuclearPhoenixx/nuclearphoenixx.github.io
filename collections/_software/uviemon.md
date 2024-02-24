---
title: UVIEMON
excerpt: 'Replacement tool for GRMON, used for debugging the processor on the the SMILE (ESA/CAS mission) SXI.'
header:
  teaser: /assets/images/software/smile1.png
#collection: hardware
#date: 2022-06-07 21:00:00 +0200
last_modified_at: 2024-02-23 15:10:00 +0200
#toc: true
#toc_sticky: true

gallery:
  - url: /assets/images/software/smile1.png
    image_path: /assets/images/software/smile1.png
    alt: 'Official logo for the SMILE mission by CAS/NSSC. '
    title: 'Official logo for the SMILE mission by CAS/NSSC. '
  - url: /assets/images/software/smile2.jpg
    image_path: /assets/images/software/smile2.jpg
    alt: 'CAD rendering of the SMILE Soft X-ray Imager instrument.'
    title: 'CAD rendering of the SMILE Soft X-ray Imager instrument.'
  - url: /assets/images/software/uviemon1.png
    image_path: /assets/images/software/uviemon1.png
    alt: 'Screenshot of UVIEMON right after connecting to the JTAG device, i.e. the GR712RC.'
    title: 'Screenshot of UVIEMON right after connecting to the JTAG device, i.e. the GR712RC.'
  - url: /assets/images/software/uviemon2.png
    image_path: /assets/images/software/uviemon2.png
    alt: 'Example `mem` command usage and output in UVIEMON.'
    title: 'Example `mem` command usage and output in UVIEMON.'
  - url: /assets/images/software/uviemon3.png
    image_path: /assets/images/software/uviemon3.png
    alt: 'Example `load` and `run` commands usage and output in GRMON and in UVIEMON for the same executable.'
    title: 'Example `load` and `run` commands usage and output in GRMON and in UVIEMON for the same executable.'
---

{% include gallery %}

## Description

Custom software tool for (remote) debugging of the dual-core LEON3-FT GR712RC processor used in the SMILE mission Soft X-ray Imager data processing unit. The Solar wind Magnetosphere Ionosphere Link Explorer, or SMILE -- is a joint mission between the European Space Agency (ESA) and the Chinese Academy of Sciences (CAS).

Due to some issues with the manufacturer-supplied software GRMON, a new program had to be developed in order to simplify remote debugging and create a less locked-down debugging environment. The open-source approach also opens up the possibility of expanding on top of the now existing code base in the future. UVIEMON as a tool is designed to enable low-level software debugging over JTAG via an FT2232H chip or similar.

## More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/NuclearPhoenixx/uviemon){: .btn .btn--primary .btn--large}
