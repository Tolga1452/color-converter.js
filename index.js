const List = require('./src/List');

const HexLetters = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};

/**
 * @param {number} decimal 
 * @returns {`#${string}`}
 */
function decimalToHex(decimal) {
    const letters = new List(HexLetters);

    if (decimal < 16) return `#${letters.keyOf(decimal)}`;
    else {
        /**
         * @type {number[]}
         */
        let nums = [];
        let num1 = decimal;
        let num2;

        /**
         * @param {string} n 
         * @returns {number}
         */
        function toNumber(n) {
            return parseFloat((n === '') ? '0' : n);
        };

        while (num1 >= 16) {
            [num1, num2] = `${num1 / 16}`.split('.').map(n => toNumber(n));

            nums.unshift(toNumber(`0.${num2}`) * 16);
        };

        nums.unshift(num1);

        return `#${nums.map(n => letters.has(n) ? letters.keyOf(n) : n).join('')}`;
    };
};

/**
 * @param {`#${string}`} hex
 * @returns {[number, number, number]}
 */
function hexToRGB(hex) {
    return [parseInt(hex.substring(1, 3), 16), parseInt(hex.substring(3, 5), 16), parseInt(hex.substring(5, 7), 16)];
};

/**
 * @param {`#${string}`} hex 
 * @returns {number}
 */
function hexToDecimal(hex) {
    /**
     * @type {number[]}
     */
    let nums = hex.replace('#', '').split('').map(n => HexLetters[n] ?? parseInt(n));
    let result = 0;

    while (nums.length > 0) {
        let num = nums[0];

        result += num * Math.pow(16, nums.length - 1);

        nums.shift();
    };

    return result;
};

/**
 * @param {[number, number, number]} rgb 
 * @returns {`#${string}`}
 */
function rgbToHex(rgb) {
    let hex = '#';

    /**
     * @param {string} x 
     */
    function add(x) {
        hex = `${hex}${x}`;
    };

    rgb.forEach(n => add(decimalToHex(n).replace('#', '')));

    return hex;
};

module.exports = class Color {
    /**
     * @param {number|`#${string}`|[number, number, number]} color 
     */
    constructor(color) {
        if (typeof color === 'number') {
            /**
             * @type {number}
             */
            this.decimal = color;
            /**
             * @type {`#${string}`}
             */
            this.hex = decimalToHex(this.decimal);
            /**
             * @type {[number, number, number]}
             */
            this.rgb = hexToRGB(this.hex);
        } else if (typeof color === 'string' && color.startsWith('#')) {
            this.hex = color.toLowerCase();
            this.decimal = hexToDecimal(this.hex);
            this.rgb = hexToRGB(this.hex);
        } else if (Array.isArray(color) && color.length === 3 && typeof (color[0], color[1], color[2]) === 'number') {
            this.rgb = color;
            this.hex = rgbToHex(this.rgb);
            this.decimal = hexToDecimal(this.hex);
        } else throw new Error('Color must be a Decimal, Hexadecimal or RGB');
    };
};