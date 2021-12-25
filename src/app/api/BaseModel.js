import { Model } from 'vue-mc';

export class BaseModel extends Model {
	constructor() {
		super();
	}

	async fetchRequest(config) {
		return await this.fetch(config)
			.then((req) => {
				return req;
			})
			.catch((error) => {
				return error;
			});
	}

	async saveRequest(config) {
		return await this.save(config)
			.then((req) => {
				return req;
			})
			.catch((error) => {
				return error;
			});
	}

	async deleteRequest(config) {
		return await this.delete(config)
			.then((req) => {
				return req;
			})
			.catch((error) => {
				return error;
			});
	}
}
