---
author: NuclearPhoenix
title: 'I worked on my own Minecraft clone!'
date: 2025-06-26 18:00:00 +0200
last_modified_at: 2025-06-26 18:00:00 +0200
categories: announcements showcase games

header:
  image: /assets/images/posts/infiniterra-header.png
  #caption: ''

#toc: true
#toc_sticky: true
---

## Introduction

Have you ever thought about recreating Minecraft on your own, just because you want to try something new and maybe are a bit disillusioned? Well, that's me! But before we get into any details, how, why and what am I thinking by working on such a seemingly huge project?

First off, there is absolutely no pressure on development to get something released or similar. I worked on this for about three months before having to stop for unrelated personal reasons, and since the pace has slowed down considerably. Before it just rots on my hard drive, I decided to publish everything. Who knows, somebody might get inspired to do something similar. Let's see where the journey takes us, while I'm having fun working on the game.

![Ingame screenshot](/assets/images/posts/infiniterra-screenshot1.jpg)

Before starting with this, I had experience with working on smaller projects in the Godot Engine, which is why I chose it as the base for this. Working on voxel games in a full-blown game engine is often seen as only borderline possible due to the huge amount of data handling required at any moment, and most games in this niche do in fact use custom implementations such as Minecraft and (former) Minetest. Now, I found this awesome module for Godot called [Voxel Tools](https://github.com/Zylann/godot_voxel), which provides you with a strong foundation of tools to work with voxel-based terrain. That's when everything started.

## Goals

The goals are straightforward: Recreate something like the early Minecraft Java Alpha with a number of changes and improvements:

Extend the world borders in the vertical direction to be the same as those of the rest of the world. In the future, this can be used to house a hell dimension down in the depths of the world and a space dimension way up in the sky, similar to the implementation in Terraria.
Improve ambiance with better lighting, sounds, and general atmosphere.
Revamp the crafting system to resemble Terraria's approach.
Add a ton of quality of life features, e.g. running with the inventory open, inventory sort button, torches lighting up the area when equipped, a world preview on the loading menu screen ...

![Ingame screenshot](/assets/images/posts/infiniterra-screenshot2.jpg)

## Where are we at?

At the moment, the following things are implemented:

- Procedural world generation of a single biome with custom terrain or flat worlds. Added two different types of trees and water (non-flowing). Worlds are about 1B x 1B x 1B blocks large.
- Player movement with dynamic camera effects including underwater (with audio) and zooming.
- Inventory system with auto-sort feature and trash bin to delete unwanted items.
- View distances up to 64 chunks, needs a lot of resources at this max though. Recommended are ranges between 16 and 32, depending on your system. Expect the game to need a lot more resources anyways. I can run at 32 chunks render distance at 144 Hz with a 3060 Ti no problem, but 64 chunks get a bit stuttery, so YMMV.
- Basic "chat" with a few commands.
- Saving and loading worlds.
- Day- and night cycle and adequate lighting.
- Around a dozen different blocks than can be placed and removed.
- Some F-keys are implemented just like they are in Minecraft, e.g. F1, F5, F12.
- The game uses the Godot Jolt physics engine with the terrain, which could be of great use in the future.

{% include video id="IuvnaJeBEwM" provider="youtube" %}

The most important things that are still missing currently -- roughly in order:

- More varied terrain generation: caves, multiple biomes, rivers, etc.
- More items and blocks
- A working crafting system
- Fluids, like running water from blocks
- More sounds, especially a larger variety for those used in steps, placing and breaking.
- Working slabs—currently, they can only be placed in one way and one per block

The terrain part will be the thing I'm going to start working on, especially getting a nice cave generator and improving on the slow tree generator. After this, I'll see if I continue to do biomes, or if I start setting up a crafting system first. Both obviously require me to add more blocks and items to the game. Adding blocks is pretty easy and I plan to make it moddable, however, I'm still searching for an efficient way to do the UV mapping of the textures to the cubes themselves, so if anyone has a better idea, please reach out!

You can have a look yourself and download the demo that I just released. Head over to the  [files tab of the IndieDB game site](https://www.indiedb.com/games/infiniterra/downloads). When in doubt, expect a ton of bugs :D

**Please share all your feedback, ideas, suggestions and so on! Every bit of response to this means a lot to me. Stay tuned for more!**

For all my German-speaking people here, there will be a short showcase of the game in its current state soon on my second channel on Youtube: [@NuclearPhoenixxGaming](https://www.youtube.com/@NuclearPhoenixxGaming)
