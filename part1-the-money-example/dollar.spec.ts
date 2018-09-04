import { Dollar } from './dollar';
import { expect, assert } from 'chai';
import 'mocha';

describe('dollar class', () => {

  it('should equal 10', () => { // use to.deep.equal to compare objects
    const five: Dollar = new Dollar(5);
    expect(five.times(2)).to.deep.equal(new Dollar(10));
  });

  it('should equal 15', () => {
    const five = new Dollar(5);
    expect(five.times(3)).to.deep.equal(new Dollar(15));
  });

  it('should equal new Dollar(5)', () => {
    expect(new Dollar(5).equals(new Dollar(5))).to.equal(true);
  })

  it('should not equal new Dollar(6)', () => {
    expect(new Dollar(5).equals(new Dollar(6))).to.equal(false);
  })

});