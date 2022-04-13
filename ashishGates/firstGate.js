const hdl = require('hdl-js');

const {Or} = hdl.emulator.BuiltInGates;

const or = new Or({
  inputPins: ['a', 'b'],
  outputPins: ['out'],
});

const inputData = [
  {a: 1, b: 0},
  {a: 1, b: 1},
];

const {result} = or.execOnData(inputData);

console.log(result);