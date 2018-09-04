import { Dollar } from './dollar';
import { expect } from 'chai';
import 'mocha';

describe('dollar class', () => {

  it('should equal 10', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).to.equal(10);
  });

});