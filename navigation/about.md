---
layout: page
title: About
permalink: /about/
---

Class of 2028

## Here are some of my favorite things

<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 25px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 300%;
        height: 300px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "6/6b/Daniil_Medvedev_US_Open_2023_%28cropped%29.jpg", "greeting": "Currently trying to make school's JV team", "description": "Favorite Tennis Player: Daniil Medvedev"},
        {"flag": "d/de/In-N-Out_Burger_Animal_Fries_and_burger.jpg", "greeting": "My favorite item on the menu are the animal fries", "description": "Favorite Fast Food: In-N-Out"},
        {"flag": "5/52/Rain_on_the_car_window%2C_Lianjiang.jpg", "greeting": "(But only every once in a while though)", "description": "Favorite Weather: Rainy"},
        {"flag": "e/ea/Coffee_Caramel_Swirl_-endofanera_%2814373508078%29.jpg", "greeting": "Coffee is underrated, mint chocolate chip is overrated", "description": "Favorite Ice Cream Flavor: Coffee"},
        {"flag": "a/a2/Mixed_onions.jpg", "greeting": "I like onions so much I could eat them raw (maybe with sauce though)", "description": "Favorite Vegetable: Onion"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/1984.jpg" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/dune.jpg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/fahrenheit451.jpg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/thegiver.jpg" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/thehobbit.jpg" alt="Image 5">
</div>
