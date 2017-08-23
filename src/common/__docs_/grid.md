# Grid

The Deathmatch grid is based on a set 
of [Twitter Bootstrap](https://v4-alpha.getbootstrap.com/layout/grid/) grid mixins. Please note 
that the Deathmatch grid classes are all prefixed with `dm-`, so where Bootstrap's class name 
 would be `col-md-3` the Deathmatch grid class name would be `dm-col-md-3`.
 
    @example
    <div class="dm-container">
      <div class="dm-row">
        <div class="dm-col">
          1 of 2
        </div>
        <div class="dm-col">
          1 of 2
        </div>
      </div>
      <div class="dm-row">
        <div class="dm-col">
          1 of 3
        </div>
        <div class="dm-col">
          1 of 3
        </div>
        <div class="dm-col">
          1 of 3
        </div>
      </div>
    </div>