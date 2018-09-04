import { Franc } from './franc';
import { expect } from 'chai';
import 'mocha';

describe('Franc class', () => {

  it('should equal 10', () => { // use to.deep.equal to compare objects
    const five: Franc = new Franc(5);
    expect(five.times(2)).to.deep.equal(new Franc(10));
  });

  it('should equal 15', () => {
    const five = new Franc(5);
    expect(five.times(3)).to.deep.equal(new Franc(15));
  });

});