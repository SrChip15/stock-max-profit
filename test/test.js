let chai = require('chai');
let maxSpreadCalc = require('../maxSpread');
describe('Max Spread Tests', () => {
  it('Should return the correct max profit', () => {
    chai.assert(maxSpreadCalc([45, 24, 35, 31, 40, 38, 11]) === 34, 'Wasn\'t correct')
  });
  it('Should return the correct max profit', () => {
    chai.assert(maxSpreadCalc([45, 50, 35, 31, 25, 38, 11]) === 39, 'Wasn\'t correct ', maxSpreadCalc([45, 50, 35, 31, 25, 38, 11]))
  });
  it('Should return the correct max profit', () => {
    chai.assert(maxSpreadCalc([54, 0, 35, 31, 40, 38, 11]) === 54, 'Wasn\'t correct', maxSpreadCalc([54, 0, 35, 31, 40, 38, 11]))
  });
  it('Should return the correct max profit', () => {
    chai.assert(maxSpreadCalc([90, 86, 87, 82, 83, 80, 89]) === 54, 'Wasn\'t correct', maxSpreadCalc([54, 0, 35, 31, 40, 38, 11]))
  });
});