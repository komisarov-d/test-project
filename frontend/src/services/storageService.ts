/* eslint-disable no-underscore-dangle */
import { StorageKey } from 'common/enums';

type Constructor = {
	storage: Storage;
};

class Store {
	_storage: Storage;

	constructor({ storage }: Constructor) {
		this._storage = storage;
	}

	public getItem<T>(key: StorageKey): T | null {
		try {
			return JSON.parse(this._storage.getItem(key)) ?? null;
		} catch (err) {
			return null;
		}
	}

	public setItem<T>(key: StorageKey, value: T): void {
		this._storage.setItem(key, JSON.stringify(value));
	}

	public appendItem<T>(key: StorageKey, value: T): void {
		this._storage.setItem(
			key,
			JSON.stringify({
				...this.getItem(key),
				...value
			})
		);
	}

	public removeItem(key: StorageKey): void {
		this._storage.removeItem(key);
	}
}

export default Store;
