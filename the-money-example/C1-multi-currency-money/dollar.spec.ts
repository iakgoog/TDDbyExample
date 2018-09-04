import { Dollar } from './dollar';
import { expect } from 'chai';
import 'mocha';

describe('dollar class', () => {

  it('should equal 10', () => {
    const five: Dollar = new Dollar(5);
    const product: Dollar = five.times(2);
    expect(product.amount).to.equal(10);
  });

  it('should equal 15', () => {
    const five = new Dollar(5);
    const product: Dollar = five.times(3);
    expect(product.amount).to.equal(15);
  });

});