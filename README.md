# color-converter.js
A simple color convert tool for Node.js

Currently supports Decimal, Hexadecimal and RGB colors.

## Installation

```bash
npm install color-converter.js
```

## Usage

### Converting Decimal Colors

```js
const Color = require('color-converter.js');

var color = new Color(1357567);

console.log(color.hex); //Output => "#0f7fbf"
console.log(color.rgb); //Output => [ 20, 182, 255 ]
```

### Converting Hexadecimal Colors

```js
const Color = require('color-converter.js');

var color = new Color("#0f7fbf");

console.log(color.decimal); //Output => 1357567
console.log(color.rgb); //Output => [ 20, 182, 255 ]
```

### Converting RGB Colors

```js
const Color = require('color-converter.js');

var color = new Color([ 20, 182, 255 ]);

console.log(color.hex); //Output => "#0f7fbf"
console.log(color.decimal); //Output => 1357567
```

## Bug Reports & Feedbacks

Please create new [issue](https://github.com/Tolga1452/color-converter.js/issues/new) on GitHub for any feedback or bug reports
