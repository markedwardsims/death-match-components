---
name: Warrior
css: dist/components/warrior/warrior.css
---

## Warrior

The Warrior component is styling added to a warrior image. The styles include 100% width, auto height
and an [opacity transition](/scss-mixins) on hover that reduces the image opacity to 75%. There is 
also a modifier that that will create a thumbnail size warrior image.

### Standard

The standard warrior styling make the image 100% the width of it's container, and auto height to 
maintain a proper aspect ratio.

    @example
    <style>
        .example-warrior-container {
            width: 200px;
        }
    </style>
    
    <div class="example-warrior-container">
        <img class="dm-warrior" src="https://vignette4.wikia.nocookie.net/americangladiators/images/2/20/Nitro.jpg/revision/latest?cb=20120207050907">
    </div>
    
    
### Thumbnail

The thumbnail modifier creates an image that is 50px by 50px. 

    @example
    <img class="dm-warrior dm-warrior--small" src="https://vignette4.wikia.nocookie.net/americangladiators/images/2/20/Nitro.jpg/revision/latest?cb=20120207050907">