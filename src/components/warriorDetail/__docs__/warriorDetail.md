---
name: Warrior Detail
group: Warriors
css: 
 - dist/components/warriorDetail/warriorDetail.css
 - dist/components/warrior/warrior.css
---

## Warrior Detail

The Warrior Detail component provides the collection of warrior information including 
[warrior image, name and number of wins. Notice the inclusion of the `dm-warrior` class 
which makes use of the [Warrior image component](/warrior). The gutters are adjusted, and the name 
and wins count are stacked when the viewport is less than the `md` grid breakpoint. The margins 
are set to `auto` so the warrior detail will be centered horizontally within it's container.

    @example
    <figure class="dm-warrior-detail">
        <img class="dm-warrior" src="https://vignette4.wikia.nocookie.net/americangladiators/images/2/20/Nitro.jpg/revision/latest?cb=20120207050907">
        <figcaption class="dm-warrior-detail__caption">
            <div class="dm-warrior-detail__name">Nitro</div>
            <div class="dm-warrior-detail__wins">0</div>
        </figcaption>
    </figure>
    