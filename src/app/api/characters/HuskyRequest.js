import { URl_API } from '@/app/config/url';
import { BaseModel } from '../BaseModel';
import { API_DETAIL_CHARACTER, API_LIST_CHARACTERS } from './constants';

export class CharactersRequest extends BaseModel {
	defaults() {
		return {};
	}

	routes() {
		return {
			save: '/',
			fetch: '/',
		};
	}

	async list(params, token) {
		return super.fetchRequest({
			url: URl_API + API_LIST_CHARACTERS,
			params: params,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		});
	}
	async detail(idChacracter, token) {
		return super.fetchRequest({
			url: URl_API + API_DETAIL_CHARACTER + idChacracter,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		});
	}
}
