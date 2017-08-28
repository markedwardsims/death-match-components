---
name: Icons
---

## Icons

The only use of icons curretly in Deathmatch Components is the notifications, so we simply use 
SVGs as background images.

_Note: there is an SCSS variable named `$icon-directory` that should be used for the url in SCSS 
files utilizing icons:_

```css  background: url('#{$icon-directory}/icon-chuck.svg') no-repeat top left;``` 


    @example
    <style>
        .example-chuck-icon-element {
            height: 40px;
            width: 40px;
            background: url('/dist/components/icons/icon-chuck.svg') no-repeat top left;
        }
        
        .example-error-icon-element {
            height: 40px;
            width: 40px;
            background: url('/dist/components/icons/icon-error.svg') no-repeat top left;
        }    
        
        .example-success-icon-element {
            height: 40px;
            width: 40px;
            background: url('/dist/components/icons/icon-success.svg') no-repeat top left;
        }  
          
        .example-warning-icon-element {
            height: 40px;
            width: 40px;
            background: url('/dist/components/icons/icon-warning.svg') no-repeat top left;
        }
    </style>

    <div class="example-chuck-icon-element"></div>
    <div class="example-error-icon-element"></div>
    <div class="example-success-icon-element"></div>
    <div class="example-warning-icon-element"></div>