# Icons

The only use of icons curretly in Deathmatch Components is the notifications, so we simply use 
SVGs as background images.

    @example
    .dm-my-chuck-icon-element {
        height: 40px;
        width: 40px;
        background: url('#{$icon-directory}/icon-chuck.svg') no-repeat top left;
    }
    
    .dm-my-error-icon-element {
        height: 40px;
        width: 40px;
        background: url('#{$icon-directory}/icon-error.svg') no-repeat top left;
    }    
    
    .dm-my-success-icon-element {
        height: 40px;
        width: 40px;
        background: url('#{$icon-directory}/icon-success.svg') no-repeat top left;
    }  
      
    .dm-my-warning-icon-element {
        height: 40px;
        width: 40px;
        background: url('#{$icon-directory}/icon-warning.svg') no-repeat top left;
    }
    
    <div class="dm-my-chuck-icon-element"></div>
    <div class="dm-my-error-icon-element"></div>
    <div class="dm-my-success-icon-element"></div>
    <div class="dm-my-warning-icon-element"></div>