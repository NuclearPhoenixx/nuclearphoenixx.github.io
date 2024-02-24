---
title: NPES-JSON
excerpt: 'Novel JSON Schema targeted at storing nuclear physics energy spectra (NPES) data.'
header:
  teaser: /assets/images/software/npes1.png
#collection: hardware
#date: 2022-06-07 21:00:00 +0200
last_modified_at: 2024-02-23 15:10:00 +0200
#toc: true
#toc_sticky: true

gallery:
  - url: /assets/images/software/npes1.png
    image_path: /assets/images/software/npes1.png
    alt: 'Screenshot from documentation.'
    title: 'Screenshot from documentation.'
---

{% include gallery %}

## Description

Novel JSON Schema targeted at storing Nuclear Physics Energy Spectra and meta data in a single data object to be parsed by an API or stored in files. Mainly used in gamma spectrometry for energy and background energy spectra, but it can be used for any kind of application where pulse height diagrams (i.e., histogram data) are used. This was originally inspired by the XML files used in the program BecqMoni (Japanese MCA) and strives to be an open, well-documented, smaller-in-size and easier-to-parse file standard for universal use. Based on JSON Schema Draft-07, therefore it can also be used to transfer data in an API context.

## More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/NPES-JSON){: .btn .btn--primary .btn--large}
