---
name: Header
css: 
 - dist/components/logo/logo.css
 - dist/components/header/header.css
---

## Header

The Deathmatch header component includes clear text as well as a logo. The height, size 
of the logo and text size decrease when in or below the grid's `md` breakpoint. 

    @example
    <header class="dm-header">
        <h1 class="dm-header__title">
            Death 
            <span class="dm-logo"></span>
            Match
        </h1>
    </header>