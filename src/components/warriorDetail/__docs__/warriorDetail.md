## Warrior Details

The Warrior Detail component provides the collection of warrior information including 
warrior image, name and number of wins. Notice the inclusion of the `dm-warrior` class 
which makes use of the Warrior image component. The gutters are adjusted, and the name 
and wins count are stacked when the viewport is less than the `md` grid breakpoint.

    @example
    <link rel='stylesheet' href='../dist/components/warriorDetail/warriorDetail.css' />
    <figure class="dm-warrior-detail">
        <img class="dm-warrior" src="images/nitro.jpg">
        <figcaption class="dm-warrior-detail__caption">
            <div class="dm-warrior-detail__name">Nitro</div>
            <div class="dm-warrior-detail__wins">0</div>
        </figcaption>
    </figure>
    