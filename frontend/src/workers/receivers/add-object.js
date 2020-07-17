import { getType } from '../../game/dynamics/dynamics';

export function receive(page, data)
{
	const base = data.base;

	if(base != null)
	{
		const Type = getType(base);

		if(Type != null)
		{
			const object = new Type(base);

			page.dynamics.set(object.s_id, object);
			object.addTo(page.scene);
		}
	}
}

export const receiver = 'add-object';
