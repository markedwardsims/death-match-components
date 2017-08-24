# SCSS Mixins

## Background Color Transition

This mixin appplies a 0.25 second transition with the ease-in-out easy algorithm, to the `background-color` property.

```css
    .dm-my-background-transition-element {
        background-color: red;
        padding: 20px;
        color: #ffffff;
    }
    
    .dm-my-background-transition-element:hover {
        background-color: navy;
    }
```
    @example
    <div class="dm-my-background-transition-element">My background transition element</div>
    
## Opacity Transition

This mixin appplies a 0.3 second transition with the ease-in-out easy algorithm, to the `opacity` property.

```css
    .dm-my-opacity-transition-element {
        opacity: 1;
        background-color: red;
        padding: 20px;
        color: #ffffff;
    }
    
    .dm-my-opacity-transition-element:hover {
        opacity: 0;
    }
```

    @example
    <div class="dm-my-opacity-transition-element">My opacity transition element</div>
    
