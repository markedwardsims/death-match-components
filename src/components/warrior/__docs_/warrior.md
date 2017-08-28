---
name: Warrior
css: dist/components/warrior/warrior.css
---

## Warrior

The Warrior component is styling added to a warrior image. The styles include 100% width, auto height
and a background transition on hover that darkens the image by 20%. There is also a modifier that 
that will create a thumbnail size warrior image.

    @example
    <style>
        .example-warrior-container {
            width: 200px;
        }
    </style>
    
    <div class="example-warrior-container">
        <img class="dm-warrior" src="https://vignette4.wikia.nocookie.net/americangladiators/images/2/20/Nitro.jpg/revision/latest?cb=20120207050907">
    </div>
    
    <img class="dm-warrior dm-warrior--small" src="https://vignette4.wikia.nocookie.net/americangladiators/images/2/20/Nitro.jpg/revision/latest?cb=20120207050907">