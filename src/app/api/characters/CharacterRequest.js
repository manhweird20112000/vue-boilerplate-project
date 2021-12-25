import { URl_API } from '@/app/config/url';
import axios from 'axios';
import { API_DETAIL_CHARACTER, API_LIST_CHARACTERS } from './constants';

export class CharacterRequest {
	async list(params, token) {
		return axios({
			method: 'GET',
			url: URl_API + API_LIST_CHARACTERS,
			params: params,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		})
			.then((response) => response)
			.catch((error) => {
				throw new Error(error);
			});
	}

	async detail(idCharacter, token) {
		return axios({
			method: 'GET',
			url: URl_API + API_DETAIL_CHARACTER + idCharacter,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		})
			.then((response) => response)
			.catch((error) => {
				throw new Error(error);
			});
	}
}
