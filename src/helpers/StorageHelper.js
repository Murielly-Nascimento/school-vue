const StorageHelper = {
    storage: localStorage,
    getDecodedItem(key) {
        var value, item = this.storage.getItem(key);

        if (item != undefined && item != null) {
            item = atob(item);

            if (item != undefined && item != null) {
                try {
                    value = JSON.parse(item);
                } catch (e) {
                    value = item;
                }
            } else {
                value = item;
            }
        }

        return value;
    },
    setEncodedItem(key, value) {
        var item = value;
        if (item != undefined && item != null && typeof item == 'object') {
            item = JSON.stringify(item);

            if (item != undefined && item != null) {
                item = btoa(item);
            }
        }

        this.storage.setItem(key, item);
    },
    getItem(key) {
        var value, item = this.storage.getItem(key);
        if (item != undefined && item != null) {
            try {
                value = JSON.parse(item);
            } catch (e) {
                value = item;
            }
        }

        return value;
    },
    getItemByIndex(key, index) {
        var value = this.getItem(key);
        return value[index];
    },
    setItem(key, value) {
        var item = value;
        if (item != undefined && item != null && typeof item == 'object') {
            item = JSON.stringify(item);
        }

        this.storage.setItem(key, item);
    },
    addItem(key, value) {
        var storage = this.getItem(key);

        if (storage === undefined) {
            storage = [value];
        } else {
            storage.push(value);
        }

        this.setItem(key, storage);
    },
    updateItem(key, value, index) {
        var items = this.getItem(key);

        if (items && items[index]) {
            items[index] = value;
        }

        this.setItem(key, items);
    },
    remove(key) {
        this.storage.removeItem(key);
    }
}

export default StorageHelper;