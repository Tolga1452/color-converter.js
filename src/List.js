module.exports = class List {
    /**
     * @param {object} e
     */
    constructor(e) {
        /**
         * @type {object}
         */
        this.enum = e;
        this.values = Object.values(e) ?? [];
        /**
         * @type {{ key: string, value: any }[]}
         */
        this.map = (Object.entries(e) ?? []).map(entry => {
            return {
                key: entry[0],
                value: entry[1]
            };
        });
    };

    /**
     * @param {any} keyOrValue 
     * @returns {boolean}
     */
    has(keyOrValue) {
        return (this.enum[keyOrValue] || this.values.includes(keyOrValue)) ? true : false;
    };

    /**
     * @param {any} value 
     * @returns {string}
     */
    keyOf(value) {
        return this.map.filter(entry => entry.value === value)[0].key;
    };
};