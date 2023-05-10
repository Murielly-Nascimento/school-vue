export class StorageHelper {
    constructor(storage) {
        this.storage = storage;
    }

    static create(storage) {
        return new StorageHelper(storage);
    }

    isValidItem(item) {
        return item !== undefined && item !== null;
    }

    getDecodedItem(key, defaultVal) {
        const item = this.storage.getItem(key);
        try {
            return JSON.parse(atob(item));
        } catch (e) {
            return item !== undefined ? item : defaultVal;
        }
    }

    setEncodedItem(key, value) {
        const item = typeof value == 'object' ?
            btoa(JSON.stringify(value)) : value;

        this.storage.setItem(key, item);
    }

    getItem(key, defaultVal) {
        const item = this.storage.getItem(key);
        try {
            return JSON.parse(item);
        } catch (e) {
            return item !== undefined ? item : defaultVal;
        }
    }

    setItem(key, value) {
        const item = typeof value == 'object' ?
            JSON.stringify(value) : value;

        this.storage.setItem(key, item);
    }

    addItem(key, value) {
        var storage = this.getItem(key, []);
        this.setItem(key, [ ...storage, value ]);
    }

    updateItem(key, value, index) {
        var items = this.getItem(key);

        if (items && items[index]) {
            items[index] = value;
        }

        this.setItem(key, items);
    }

    remove(key) {
        this.storage.removeItem(key);
    }

    getStorage() {
        return this.storage;
    }
}

export const useSession = () => {
    return StorageHelper.create(sessionStorage);
}

export const useStorage = () => {
    return StorageHelper.create(localStorage);
}