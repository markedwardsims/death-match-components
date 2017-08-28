---
name: Table
css: dist/components/table/table.css
---

## Table

There is currently only a single table style in Deathmatch. This table is perfect for creating 
the leaderboard.

### Light 

The base styles for the table assume that the table is on a light background. Each row has a 
background color hover transition.

    @example
    <style>
        .example-dm-table {
            width: 100%;
        }
    </style>
    
    <table class="dm-table example-dm-table">
        <thead class="dm-table__thead">
            <tr class="dm-table__row">
                <th class="dm-table__cell">Warrior</th>
                <th class="dm-table__cell dm-text-right">Wins</th>
            </tr>
        </thead>
        <tbody>
            <tr class="dm-table__row">
                <td class="dm-table__cell">Nitro</td>
                <td class="dm-table__cell dm-text-right">20</td>
            </tr>
            <tr class="dm-table__row">
                <td class="dm-table__cell">T2000</td>
                <td class="dm-table__cell dm-text-right">17</td>
            </tr>
            <tr class="dm-table__row">
                <td class="dm-table__cell">Rocky Balboa</td>
                <td class="dm-table__cell dm-text-right">27</td>
            </tr>
        </tbody>
    </table>
    
    
### Dark

Adding the `dm-table--dark` CSS class will theme the table so it looks snappy on a drak background. 
The row hover background colors are adjust appropriately. 

    @example
    <style>
        .example-dm-table {
            width: 100%;
        }
        .example-dark-bg {
            background-color: black;
        }
    </style>
        
    <div class="example-dark-bg">
        <table class="dm-table dm-table--dark example-dm-table">
            <thead class="dm-table__thead">
                <tr class="dm-table__row">
                    <th class="dm-table__cell">Warrior</th>
                    <th class="dm-table__cell dm-text-right">Wins</th>
                </tr>
            </thead>
            <tbody>
                <tr class="dm-table__row">
                    <td class="dm-table__cell">Nitro</td>
                    <td class="dm-table__cell dm-text-right">20</td>
                </tr>
                <tr class="dm-table__row">
                    <td class="dm-table__cell">T2000</td>
                    <td class="dm-table__cell dm-text-right">17</td>
                </tr>
                <tr class="dm-table__row">
                    <td class="dm-table__cell">Rocky Balboa</td>
                    <td class="dm-table__cell dm-text-right">27</td>
                </tr>
            </tbody>
        </table>
    </div>