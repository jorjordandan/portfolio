# Jordan's Office, a 3d point and click mini-game

This is amini point and click adventure set in my office built with react-three-fiber, drei, zustand, react-spring, and also use-sound. 

## Workflow
The workflow for building it was to create a main scene in blender, import models, apply transformations, and then export to gltf. That way, when I imported them they were automatically in the correct location. I will probably add more items in the future, as it's a very simple process.

I also used a portal for the inventory UI, which created a few problems and required a little bit of troubleshooting, but works pretty well. The code for the portal is in the 'items/inventory.jsx' file.

## Typescript
I intended to use typescript, but apparently three.js recently removed the type declarations and so the typescript is incomplete, and I sort of didn't worry about it too much. It was very helpful in the zustand state though, as it allowed for autocomplete and types throughout the project.

## Audio
I left audio till the end, and my initial idea was to create a middleware and watch for specific actions to play audio. Eventually I abandoned that idea and created a SoundManager element useing use-sound. There's only 2 audio files, the music, and the sound effects which are used as 'sprites' in the SoundManager file. It worked great, and I added all the sound effects (made on my OP-1) in an hour or two.

## Text
Most of the text is in the text.ts file, but I got lazy and started passing text directly after a while. This caused some issues where arrays of text might keep their position when it wasn't desirable. It would be much better if they were all in one file, to make it easier to edit/rewrite the text and support internationalization. It's easy to fix, and maybe I will one day. 

## Zustand
Zustand is great - it's incredibly simple and effective. However, I am definitely abusing useStore in this project - I started just returning the entire state in places because I was trying to rush. Again, an easy fix, but it's surprising how it doesn't actually seem to negatively affect performance that much.

## Performance
I could do a lot of performance tuning on the react side. There's a ton of unecessary renders happening, and I didn't bother memoing or usecallbacking anything. Again though, there doesn't seem to be any drastic issues. The entire scene is around 100k triangles, and the materials are all just emission mostly. most of the textures are one swatch file.

## Things I'd like to do

I'd like to: 
* create a more useful abstraction for the text, maybe extract it as a library
* make an abstraction for interactive items
* make a video showing the process
* fix one odd stutter when dragging with the inventory open
* finesse the materials as they are pretty basic
* make animated cords
* add more items
* add more interactive items
* make the puzzle more complex or add another puzzle
* add the ability to add another location
* add a day night cycle/light dark scheme
* add a window
