import Matter from 'matter-js';

import { Static, Categories } from '../objects.js';

export default class WorldBorder extends Static
{
	static TYPE = 'world-border';

	static create(definers, base)
	{
		if(base.width == null)
			throw 'Missing Parameter - WorldBorder.width';
		if(base.height == null)
			throw 'Missing Parameter - WorldBorder.height';

		const width = base.width;
		const height = base.height;
		const border = 5;

		const static_obj = Static.create({
			body: Matter.Body.create({
				parts: [
					Matter.Bodies.rectangle(width / 2, 0 - border / 2, width, border), // top rect
					Matter.Bodies.rectangle(0 - border / 2, height / 2, border, height), // left rect
					Matter.Bodies.rectangle(width + border / 2, height / 2, border, height), // right rect,
					Matter.Bodies.rectangle(width / 2, height + border / 2, width, border),
				],
			}),
			category: Categories.Border,
			type: WorldBorder.TYPE,
			terrain: false,
		}, base);

		static_obj.width = width;
		static_obj.height = height;

		return static_obj;
	}

	static getBase(world_bound)
	{
		return {
			...Static.getBase(world_bound),
			width: world_bound.width,
			height: world_bound.height,
		};
	}
}