## Header

The Deathmatch header component includes clear text as well as a logo. The height, size 
of the logo and text size decrease when in or below the grid's `md` breakpoint. 

    @example
    <link rel='stylesheet' href='../dist/components/header/header.css' />
    <header class="dm-header">
        <h1 class="dm-header__title">
            Death 
            <span class="dm-header__logo"></span>
            Match
        </h1>
    </header>