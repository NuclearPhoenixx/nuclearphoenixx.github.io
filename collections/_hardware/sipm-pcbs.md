---
title: Silicon Photomultiplier (SiPM) PCBs
excerpt: 'All kinds of different carrier and breakout boards for silicon photomultipliers.'
header:
  teaser: /assets/images/hardware/4x4-sipm1.png
#collection: hardware
#date: 2022-06-07 21:00:00 +0200
last_modified_at: 2024-02-23 15:10:00 +0200
toc: true
toc_sticky: true

microfc-gallery:
  - url: /assets/images/hardware/microfc-sipm1.png
    image_path: /assets/images/hardware/microfc-sipm1.png
    alt: '6mm MicroFC SiPM Carrier Board Front'
    title: '6mm MicroFC SiPM Carrier Board Front'
  - url: /assets/images/hardware/microfc-sipm2.png
    image_path: /assets/images/hardware/microfc-sipm2.png
    alt: '6mm MicroFC SiPM Carrier Board Back'
    title: '6mm MicroFC SiPM Carrier Board Back'

tiny-6-microfc-gallery:
  - url: /assets/images/hardware/tiny6-sipm1.png
    image_path: /assets/images/hardware/tiny6-sipm1.png
    alt: 'Tiny 6mm MicroFC SiPM Carrier Board Front'
    title: 'Tiny 6mm MicroFC SiPM Carrier Board Front'
  - url: /assets/images/hardware/tiny6-sipm2.png
    image_path: /assets/images/hardware/tiny6-sipm2.png
    alt: 'Tiny 6mm MicroFC SiPM Carrier Board Back'
    title: 'Tiny 6mm MicroFC SiPM Carrier Board Back'

tiny-3-microfc-gallery:
  - url: /assets/images/hardware/tiny3-pcb_front.png
    image_path: /assets/images/hardware/tiny3-pcb_front.png
    alt: 'Tiny 3mm MicroFC SiPM Carrier Board Front'
    title: 'Tiny 3mm MicroFC SiPM Carrier Board Front'
  - url: /assets/images/hardware/tiny3-pcb_back.png
    image_path: /assets/images/hardware/tiny3-pcb_back.png
    alt: 'Tiny 3mm MicroFC SiPM Carrier Board Back'
    title: 'Tiny 3mm MicroFC SiPM Carrier Board Back'

microfc-2x2-array-gallery:
  - url: /assets/images/hardware/2x2-sipm1.png
    image_path: /assets/images/hardware/2x2-sipm1.png
    alt: 'MicroFC SiPM 2x2 Array Board Front'
    title: 'MicroFC SiPM 2x2 Array Board Front'
  - url: /assets/images/hardware/2x2-sipm2.png
    image_path: /assets/images/hardware/2x2-sipm2.png
    alt: 'MicroFC SiPM 2x2 Array Board Back'
    title: 'MicroFC SiPM 2x2 Array Board Back'

afbr-4x4-array-gallery:
  - url: /assets/images/hardware/4x4-sipm1.png
    image_path: /assets/images/hardware/4x4-sipm1.png
    alt: 'AFBR SiPM 4x4 Array Board Front'
    title: 'AFBR SiPM 4x4 Array Board Front'
  - url: /assets/images/hardware/4x4-sipm2.png
    image_path: /assets/images/hardware/4x4-sipm2.png
    alt: 'AFBR SiPM 4x4 Array Board Back'
    title: 'AFBR SiPM 4x4 Array Board Back'

afbr-6-array-gallery:
  - url: /assets/images/hardware/afbr-eol-sipm1.png
    image_path: /assets/images/hardware/afbr-eol-sipm1.png
    alt: '6mm AFBR SiPM Carrier Board Front'
    title: '6mm AFBR SiPM Carrier Board Front'
  - url: /assets/images/hardware/afbr-eol-sipm2.png
    image_path: /assets/images/hardware/afbr-eol-sipm2.png
    alt: '6mm AFBR SiPM Carrier Board Back'
    title: '6mm AFBR SiPM Carrier Board Back'
---

## 6mm MicroFC SiPM Carrier Board

{% include gallery id="microfc-gallery" %}

### Description

Carrier board for a 6 mm C-Series MICROFC-60035-SMT silicon photomultiplier by onsemi designed specifically to work with the Open Gamma Detector, but can be used with any other system. With additional (optional) circuitry for automatic SiPM temperature gain compensation. PCB size is 18 x 18 mm.

The PCB includes the recommended SiPM biasing filter and temperature compensation that are optional to use.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/MicroFC-SiPM-Carrier-Board){: .btn .btn--primary .btn--large}

---

## Tiny 6mm MicroFC SiPM Carrier Board

{% include gallery id="tiny-6-microfc-gallery" %}

### Description

Tiny carrier board for a 6 mm C-Series MICROFC-60035-SMT silicon photomultiplier by onsemi designed specifically to work with the Open Gamma Detector, but can be used with any other system.

On the front side there is only the sensor itself while all the other parts are on the back. This ensures good optical contact and light-tight sealing. The PCB includes an RC low-pass filter that is optional to use.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/Tiny-MicroFC-Carrier-Board){: .btn .btn--primary .btn--large}

---

## Tiny 3mm MicroFC SiPM Carrier Board

{% include gallery id="tiny-3-microfc-gallery" %}

### Description

Tiny carrier board for a 3 mm C-Series MICROFC-60035-SMT silicon photomultiplier by onsemi. PCB size is 6 x 6 mm. The solder pads for the SiPM are slightly bigger than they need to so that you can easily hand-solder everything.

On the front side there is only the sensor itself and the two connections are on the back. This ensures good optical contact and light-tight sealing.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/Tiny-3mm-MicroFC-Carrier-Board){: .btn .btn--primary .btn--large}

---

## MicroFC SiPM 2x2 Array Board

{% include gallery id="microfc-2x2-array-gallery" %}

### Description

Carrier board for a 2 x 2 array of the 6 mm C-Series MICROFC-60035-SMT silicon photomultipliers by onsemi.

On the front side there are only the 4 sensors themselves while all the other parts are on the back. This ensures good optical contact and light-tight sealing. The PCB includes some bias filtering for the 4 SiPMs that must also be soldered and an optional temperature compensation circuit! The temperature compensation takes care of the change in bias voltage and therefore gain depending on the ambient temperature (~21mV/K).

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/MicroFC-SiPM-Array-Board){: .btn .btn--primary .btn--large}

---

## AFBR SiPM 4x4 Array Board

{% include gallery id="afbr-4x4-array-gallery" %}

### Description

Carrier board for the AFBR-S4N44P164M SiPM: a 4 x 4 array of 4 mm silicon photomultipliers by Broadcom / Avago.

On the front side there is only the sensor itself and all the other parts are on the back. This ensures good optical contact and light-tight sealing. The PCB includes some bias filtering for the SiPM array that must also be soldered for the board to work!

The SiPMs all share a common cathode with an R-C low-pass filter and some bulk decoupling and an additional R-C filter for each group of 4 individual SiPMs. All anodes are also connected together so that the 16 SiPMs act like a single large-size SiPM at the signal output.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/AFBR-SiPM-Array-Board){: .btn .btn--primary .btn--large}

---

## 6mm AFBR SiPM Carrier Board (EOL)

{% include gallery id="afbr-6-array-gallery" %}

### Description

Carrier board for a 6 mm AFBR-S4N66C013 silicon photomultiplier by Broadcom designed specifically to work with the Open Gamma Detector.

On the front side there is only the sensor itself while all the other parts are on the back. This ensures good optical contact and light-tight sealing. The PCB includes some generic SiPM (like the MicroFC SiPM) that is optional to use.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/OpenGammaProject/AFBR-SiPM-Carrier-Board){: .btn .btn--primary .btn--large}
