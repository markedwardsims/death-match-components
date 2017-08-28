---
name: Grid
---

## Grid

The Deathmatch grid is based on a set 
of [Twitter Bootstrap](https://v4-alpha.getbootstrap.com/layout/grid) grid mixins. Please note 
that the Deathmatch grid classes are all prefixed with `dm-`, so where Bootstrap's class name 
 would be `col-md-3` the Deathmatch grid class name would be `dm-col-md-3`.
 
    @example
    <style>
        .example-grid-element {
            background-color: rgba(0, 0, 0, 0.1);
            border: 1px solid white;
            color: grey;
            padding: 30px;
            text-align: center;
        }
    </style>
    
    <div class="dm-container">
      <div class="dm-row">
        <div class="dm-col-sm example-grid-element">
          1 of 1
        </div>
      </div>
      <div class="dm-row">
        <div class="dm-col-sm example-grid-element">
          1 of 2
        </div>
        <div class="dm-col-sm example-grid-element">
          2 of 2
        </div>
      </div>
      <div class="dm-row">
        <div class="dm-col-sm example-grid-element">
          1 of 3
        </div>
        <div class="dm-col-sm example-grid-element">
          2 of 3
        </div>
        <div class="dm-col-sm example-grid-element">
          3 of 3
        </div>
      </div>
      <div class="dm-row">
        <div class="dm-col-sm example-grid-element">
          1 of 4
        </div>
        <div class="dm-col-sm example-grid-element">
          2 of 4
        </div>
        <div class="dm-col-sm example-grid-element">
          3 of 4
        </div>
        <div class="dm-col-sm example-grid-element">
          4 of 4
        </div>
      </div>
      <div class="dm-row">
        <div class="dm-col-sm example-grid-element">
          1 of 6
        </div>
        <div class="dm-col-sm example-grid-element">
          2 of 6
        </div>
        <div class="dm-col-sm example-grid-element">
          3 of 6
        </div>
        <div class="dm-col-sm example-grid-element">
          4 of 6
        </div>
        <div class="dm-col-sm example-grid-element">
          5 of 6
        </div>
        <div class="dm-col-sm example-grid-element">
          6 of 6
        </div>
      </div>
    </div>