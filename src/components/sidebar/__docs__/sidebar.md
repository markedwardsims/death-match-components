## Sidebar

All good apps need a sidebar. The Deathmatch sidebar is a dark, almost black background with 
white foreground by default. Styles are available for sidebar sections as well as full-width
sections. The sidebar is positioned using a float left. 

```css
    .dm-sidebar {
        width: 50%;
    }
    
    .dm-not-the-sidebar {
        width: 50%;
        float: right
    }
```

    @example
    <link rel='stylesheet' href='../dist/components/sidebar/sidebar.css' />
    <div class="dm-sidebar">
        <div class="dm-sidebar__section">
            This is a sidebar section
        </div>
        <div class="dm-sidebar__section">
            This is another sidebar section
        </div>
        <div class="dm-sidebar__section dm-sidebar__section--full-width">
            This is a full-width sidebar section
        </div>
        <div class="dm-sidebar__section">
            This is the last sidebar section
        </div>
    </div>
    
    <div class="dm-not-the-sidebar">
        This is what the main element might look like
    </div>