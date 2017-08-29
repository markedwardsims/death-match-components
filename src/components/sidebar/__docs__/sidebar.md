---
name: Sidebar
group: Layout
css: dist/components/sidebar/sidebar.css
---

## Sidebar

All good apps need a sidebar. The Deathmatch sidebar is a dark, almost black background with 
white foreground by default. Styles are available for sidebar sections as well as full-width
sections. The sidebar is positioned using a float left, and the companion main element can 
be created by using the `dm-main` class.

    @example
    <style>
        .example-dm-sidebar {
            width: 250px;
        }
        .example-dm-main {
            padding: 20px 20px 100px 20px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            width: calc(100% - 250px);
            color: grey;
        }
        .example-full-width-section {
            background-color: #efefef;
            padding: 20px 0;
            color: grey;
        }
    </style>
    
    <div class="dm-sidebar example-dm-sidebar">
        <div class="dm-sidebar__section">
            This is a sidebar section which has 1rem of padding on all sides but the bottom.
        </div>
        <div class="dm-sidebar__section">
            This is another sidebar section. It also has 1rem of padding on all sides but the bottom.
        </div>
        <div class="dm-sidebar__section dm-sidebar__section--full-width">
            <div class="example-full-width-section">This is a full-width sidebar section which has no padding on the sides. This allows us to put full width content in this section.</div>
        </div>
        <div class="dm-sidebar__section">
            This is the last sidebar section which has padding-bottom applied.
        </div>
    </div>
    
    <div class="dm-main example-dm-main">
        This is what the main element might look like
    </div>