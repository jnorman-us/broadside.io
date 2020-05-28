import DatabaseService from '../database/database.service.js';

import Player from './player.js';

export default class PlayersService
{
	static model;

	static initialize()
	{
		Player.initialize(PlayersService);

		PlayersService.model = DatabaseService.createModel(
			'Player', Player,
		);
	}

	static async createPlayer(data)
	{
		return await PlayersService.model.create(data);
	}

	static async getPlayerById(id)
	{
		return await PlayersService.model.findOne({
			_id: id,
		});
	}

	static async getPlayerByEmail(email)
	{
		return await PlayersService.model.findOne({
			email: email,
		});
	}

	static async getPlayerByUsername(username)
	{
		return await PlayersService.model.findOne({
			username: username,
		});
	}
}
