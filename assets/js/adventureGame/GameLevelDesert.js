// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Treasure from './Treasure.js';

class GameLevelDesert {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_desert = path + "/images/gamify/grassbg.jpg"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Cat
    const sprite_src_cat = path + "/images/gamify/cat.png"; // be sure to include the path
    const CAT_SCALE_FACTOR = 7;
    const sprite_data_cat = {
        id: 'Cat',
        greeting: "battle cat!11!!!",
        src: sprite_src_cat,
        SCALE_FACTOR: CAT_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 15,
        INIT_POSITION: { x: GameEnv.innerWidth, y: height - (height/CAT_SCALE_FACTOR) }, 
        pixels: {height: 115, width: 235},
        orientation: {rows: 2, columns: 5 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 0, start: 0, columns: 3 },
        right: {row: 0, start: 0, columns: 3 },
        up: {row: 0, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

      // NPC data for Trash Cat 
    const sprite_src_trashcat = path + "/images/gamify/trashcat1.png"; // be sure to include the path
    const sprite_data_trashcat = {
        id: 'Trash_Cat',
        greeting: "give me money",
        src: sprite_src_trashcat,
        SCALE_FACTOR: 3.5,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 5,
        pixels: {height: 160, width: 480},
        INIT_POSITION: { x: (width / 2.14), y: (height / 9)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 4 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
    };

    const sprite_src_epic_seed = path + "/images/gamify/epic_seed.png"; // be sure to include the path
    const sprite_data_epic_seed = {
        id: 'epic_seed',
        greeting: "You found an epic catfruit seed! In the Battle Cats, this is a rare and powerful item used to evolve your cats to make them stronger! (Press E to collect)",
        src: sprite_src_epic_seed,
        SCALE_FACTOR: 7,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 5,
        pixels: {height: 128, width: 128},
        INIT_POSITION: { x: (width / 22), y: (height / 1.5)},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
    };

    const sprite_src_stone_cat = path + "/images/gamify/stone_cat.png"; // be sure to include the path
    const sprite_data_stone_cat = {
        id: 'stone_cat',
        greeting: "You found the Stone Cat! This is a unit that you can use in-game to send to the frontline and block enemy attacks! (Press E to collect)",
        src: sprite_src_stone_cat,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 5,
        pixels: {height: 128, width: 128},
        INIT_POSITION: { x: (width / 3.45), y: (height / 22)},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
    };

    const sprite_src_floating_orb = path + "/images/gamify/floating_orb.png"; // be sure to include the path
    const sprite_data_floating_orb = {
        id: 'floating_orb',
        greeting: "You found an S tier floating damage up talent orb! In game, talent orbs are used on units to boost their stats and make them stronger against certain types of enemies! (Press E to collect)",
        src: sprite_src_floating_orb,
        SCALE_FACTOR: 15,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 5,
        pixels: {height: 87, width: 87},
        INIT_POSITION: { x: (width / 1.266), y: (height / 7.2)},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
    };
  /*  // NPC data for HTML Hank
const sprite_src_htmlhank = path + "/images/gamify/htmlhank.png"; // be sure to include the path
const sprite_data_htmlhank = {
    id: 'HTML Hank',
    greeting: "Hey there! I'm HTML Hank, the web architect. Let's build some awesome webpages together!",
    src: sprite_src_html_hank,
    SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
    ANIMATION_RATE: 60,
    pixels: { height: 350, width: 550 },
    INIT_POSITION: { x: (width / 2), y: (height / 2) },
    orientation: { rows: 2, columns: 4 },
    down: { row: 0, start: 0, columns: 3 },  // This is the stationary NPC, down is default
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },

    // HTML & CSS quiz
    quiz: { 
        title: "HTML & CSS Mastery Quiz",
        questions: [
            "What does HTML stand for?\n1. HyperText Markup Language\n2. HighText Machine Learning\n3. Hyper Transfer Markup Language\n4. Hyper Tool Markup Language",
            "Which HTML tag is used to define the largest heading?\n1. <h1>\n2. <h6>\n3. <header>\n4. <h0>",
            "Which tag is used to create a hyperlink in HTML?\n1. <a>\n2. <link>\n3. <href>\n4. <url>",
            "Which CSS property is used to change text color?\n1. color\n2. text-color\n3. font-color\n4. bgcolor",
            "Which unit is relative to the font size of the root element in CSS?\n1. rem\n2. em\n3. px\n4. vh",
            "What is the correct way to reference an external CSS file?\n1. <link rel='stylesheet' href='styles.css'>\n2. <style src='styles.css'>\n3. <css file='styles.css'>\n4. <script href='styles.css'>",
            "How do you center an element horizontally using CSS?\n1. margin: auto;\n2. align: center;\n3. text-align: middle;\n4. float: center;",
            "Which HTML tag is used for creating an unordered list?\n1. <ul>\n2. <ol>\n3. <list>\n4. <li>",
            "What is the purpose of the <meta> tag in HTML?\n1. To provide metadata about the document\n2. To create a navigation menu\n3. To define the main content area\n4. To embed images"
        ]
    }
}; */

    // List of objects defnitions for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_cat },
      { class: Npc, data: sprite_data_trashcat },
      { class: Treasure, data: sprite_data_epic_seed},
      { class: Treasure, data: sprite_data_stone_cat},
      { class: Treasure, data: sprite_data_floating_orb},
     // { class: Npc, data: sprite_data_htmlhank }, 
    ];
  }

}

export default GameLevelDesert;