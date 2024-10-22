---
layout: base
title: RPG
permalink: /rpg0.2x/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg0.2x/GameControl.js';

    // Background data
    const image_src = "{{site.baseurl}}/images/rpg/background/bg_0.png";
    const image_data = {
    SCALE_FACTOR: 0.001,  // Scaling the size of the sprite
    STEP_FACTOR: 1000, // Timing for movement or steps
    ANIMATION_RATE: 50, // Animation frame rate in milliseconds
    pixels: {height: 395, width: 1000}, // Size of a single frame in the sprite sheet
    columns: 7, // Number of columns in the sprite sheet
    rows: 1,   // Number of rows in the sprite sheet
    totalFrames: 7 // Total number of frames in the sprite sheet (columns * rows)
    };
    const image = {src: image_src, data: image_data};

    // Sprite data
    const sprite_src = "{{site.baseurl}}/images/rpg/cursor.png";
    const sprite_data = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        pixels: {height: 80, width: 80},
        //orientation: {rows: 1, columns: 4 },
        //down: {row: 0, start: 0, columns: 3 },
        //left: {row: 1, start: 0, columns: 1 },
        //right: {row: 1, start: 0, columns: 4 },
        //up: {row: 1, start: 0, columns: 2 },
    };
    const sprite = {src: sprite_src, data: sprite_data};

    // Assets for game
    //const assets = {}
    //const assets = {image: image}
    //const assets = {sprite: sprite}
    const assets = {image: image, sprite: sprite}

    // Start game engine
    GameControl.start(assets);
</script>
