---
name: Inline List
css: dist/components/inlineList/inlineList.css
---

## Inline List

Displaying elements `inline-block` is a great move, but sometimes the vertical spacing and alignment 
can be a challenge. The Deathmatch Inline List component employs a float to allow inline elements 
with predictable vertical alignment.

    @example
    <style>
        .example-item {
            padding: 20px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: grey;
        }
    </style>
    
    <div class="dm-inline-list">
        <div class="dm-inline-list__item example-item">1</div>
        <div class="dm-inline-list__item example-item">2</div>
        <div class="dm-inline-list__item example-item">3</div>
        <div class="dm-inline-list__item example-item">4</div>
        <div class="dm-inline-list__item example-item">5</div>
        <div class="dm-inline-list__item example-item">6</div>
    </div>