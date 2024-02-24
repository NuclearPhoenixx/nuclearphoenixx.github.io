---
title: Godot Engine Things
excerpt: 'Physics applets, libraries and all kinds of demo projects that I made using the Godot (game) engine.'
header:
  teaser: /assets/images/software/n-body.png
#collection: hardware
#date: 2022-06-07 21:00:00 +0200
last_modified_at: 2024-02-23 15:10:00 +0200
toc: true
toc_sticky: true

tilemap-gallery:
  - url: /assets/images/software/tilemap.gif
    image_path: /assets/images/software/tilemap.gif
    alt: 'Demo with no additional cell margin to make the effect visual on the borders.'
    title: 'Demo with no additional cell margin to make the effect visual on the borders.'

rutherford-gallery:
  - url: /assets/images/software/rutherford.png
    image_path: /assets/images/software/rutherford.png
    alt: 'Screenshot of the program.'
    title: 'Screenshot of the program.'

nbody-gallery:
  - url: /assets/images/software/n-body.png
    image_path: /assets/images/software/n-body.png
    alt: 'Screenshot of the program.'
    title: 'Screenshot of the program.'

pendulum-gallery:
  - url: /assets/images/software/pendulum.png
    image_path: /assets/images/software/pendulum.png
    alt: 'Screenshot of the program.'
    title: 'Screenshot of the program.'
---

## Godot FOV TileMap

{% include gallery id="tilemap-gallery" %}

### Description

Simple Godot 3.x class that allows TileMap manipulation depending on a Camera2D's FOV. It loads and unloads all cells depending on Camera2D position and settings.

This allows you to, for example, easily work with a procedural map generator. You can add your generated cells to the map dictionary, so that you only have to generate around the Camera2D's FOV, but with a buffer of an arbitrary number of cells so that players won't notice.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/NuclearPhoenixx/Godot-FOV-TileMap){: .btn .btn--primary .btn--large}

---

## Rutherford Scattering Program

{% include gallery id="rutherford-gallery" %}

### Description

This simulation numerically solves the coupled differential equation for two charged particles interacting only via Coulomb's law. The resulting interaction is commonly known as Rutherford scattering or Coulomb scattering.

Standard values represent a Proton being fired at a gold nucleus representing the famous Geiger–Marsden experiment (also known as Rutherford gold foil experiment).

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/NuclearPhoenixx/Rutherford-Scattering){: .btn .btn--primary .btn--large}

---

## N-body Problem Program

{% include gallery id="nbody-gallery" %}

### Description

This simulation solves the n-body-problem numerically for theoretically infinite objects in a 2D plane. This means computing the vector of acceleration of each object resulting from the gravitational pull of the other objects. The number of calculation cycles per frame is given by the factor n \* (n - 1) where n is the number of spawned objects. The resulting force on each object will be calculated from a combination of all individual force vectors. Made with Godot Engine 3.x (no physics engine involved).

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/NuclearPhoenixx/n-body-problem){: .btn .btn--primary .btn--large}

---

## Physics Pendulum Program

{% include gallery id="pendulum-gallery" %}

### Description

This simulation solves the accurate differential equation for a simple (mathematical) pendulum numerically in earth's field of gravity. Made with Godot Engine 3.x (no physics engine involved).

A video by 3Blue1Brown about differential equations inspired me to create this project.

### More info about this project

[<i class="fab fa-github"></i> GitHub](https://github.com/NuclearPhoenixx/Physics-Pendulum){: .btn .btn--primary .btn--large}
