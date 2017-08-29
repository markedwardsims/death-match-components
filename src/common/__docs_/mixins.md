---
name: SCSS Mixins
group: CSS
---

## SCSS Mixins

### Background Color Transition

This mixin appplies a 0.25 second transition with the ease-in-out easy algorithm, to the `background-color` property.

```scss
    .dm-my-background-transition-element {
        @include background-transition;
        background-color: red;
        padding: 20px;
        color: #ffffff;
    }
    
    .dm-my-background-transition-element:hover {
        background-color: navy;
    }
```
    
### Opacity Transition

This mixin appplies a 0.3 second transition with the ease-in-out easy algorithm, to the `opacity` property.

```scss
    .dm-my-opacity-transition-element {
        @include background-transition;
        opacity: 1;
        background-color: red;
        padding: 20px;
        color: #ffffff;
    }
    
    .dm-my-opacity-transition-element:hover {
        opacity: 0;
    }
```
