import Matter from 'matter-js';
const { Body, Bodies, Vector } = Matter;

import Tile from './tile.js';

export default WaterTile extends Tile
{
    static TYPE()
    {
        return 'water-tile';
    }

    static create(base_object)
    {

    }
}
