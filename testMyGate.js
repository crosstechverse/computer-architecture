const hdl = require('hdl-js');

// Load `And` class from HDL:
const MukAnd = hdl.fromHDLFile('./MukAnd.hdl');
const MukAnd16 = hdl.fromHDLFile('./MukAnd16.hdl');
const MukMux = hdl.fromHDLFile('./MukMux.hdl');

// Instance of the class:
const and = MukAnd.defaultFromSpec();
const and16 = MukAnd16.defaultFromSpec();
const mux = MukMux.defaultFromSpec();

// Test:
// and
//   .setPinValues({a: 1, b: 1})
//   .eval();

// {a: 1, b: 1, n: 0, out: 1}
//console.log(and.getPinValues());

const inputData = [
  {a: 1, b: 0},
  {a: 1, b: 1},
];

const inputData16 = [
  {a: 0b0000000000000000, b: 0b0000000000000000},
  {a: 0b0000000000000000, b: 0b1111111111111111},
  {a: 0b1111111111111111, b: 0b1111111111111111},
  {a: 0b1010101010101010, b: 0b0101010101010101}
];

const inputDataMux = [
  {a: 0, b: 0, sel: 0},
  {a: 0, b: 1, sel: 0},
  {a: 1, b: 0, sel: 0},
  {a: 1, b: 1, sel: 0},
  {a: 0, b: 0, sel: 1},
  {a: 0, b: 1, sel: 1},
  {a: 1, b: 0, sel: 1},
  {a: 1, b: 1, sel: 1}
];

//const {result} = and.execOnData(inputData);
//console.log(result);

// const {result} = and16.execOnData(inputData16);
// console.log(result);

const {result} = mux.execOnData(inputDataMux);
console.log(result);
