import { Dollar } from './dollar';
import { expect, assert } from 'chai';
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

  it('should equal new Dollar(5)', () => {
    expect(new Dollar(5).equals(new Dollar(5))).to.equal(true);
  })

  it('should not equal new Dollar(6)', () => {
    expect(new Dollar(5).equals(new Dollar(6))).to.equal(false);
  })

});