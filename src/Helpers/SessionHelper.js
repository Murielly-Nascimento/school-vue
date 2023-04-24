const SessionHelper = {
    getDecodedItem(key) {
        var value, item = sessionStorage.getItem(key);

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
    setDecodedItem(key, value) {
        var item = value;
        if (item != undefined && item != null && typeof item == 'object') {
            item = JSON.stringify(item);

            if (item != undefined && item != null) {
                item = btoa(item);
            }
        }

        sessionStorage.setItem(key, item);
    },
    getItem(key) {
        var value, item = sessionStorage.getItem(key);
        if (item != undefined && item != null) {
            try {
                value = JSON.parse(item);
            } catch (e) {
                value = item;
            }
        }

        return value;
    },
    getItemData(key) {
        return this.getItem(key).data;
    },
    setItem(key, value) {
        var item = value;
        if (item != undefined && item != null && typeof item == 'object') {
            item = JSON.stringify(item);
        }

        sessionStorage.setItem(key, item);
    }
}

export default SessionHelper;