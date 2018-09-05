import { Dollar } from './dollar';
import { Franc } from './franc';
import { expect } from 'chai';
import 'mocha';

describe('Test Dollar Multiplication', () => {

  it('Dollar(5).times(2) should equal 10', () => { // use to.deep.equal to compare objects
    const five: Dollar = new Dollar(5);
    expect(five.times(2)).to.deep.equal(new Dollar(10));
  });

  it('Dollar(5).times(3) should equal 15', () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(3)).to.deep.equal(new Dollar(15));
  });

});

describe('Test Franc Multiplication', () => {

  it('Franc(5).times(2) should equal 10', () => { // use to.deep.equal to compare objects
    const five: Franc = new Franc(5);
    expect(five.times(2)).to.deep.equal(new Franc(10));
  });

  it('Franc(5).times(3) should equal 15', () => {
    const five: Franc = new Franc(5);
    expect(five.times(3)).to.deep.equal(new Franc(15));
  });

});

describe('Test Equality', () => {

  it('new Dollar(5) should equal new Dollar(5)', () => {
    expect(new Dollar(5).equals(new Dollar(5))).to.equal(true);
  })

  it('new Dollar(5) should not equal new Dollar(6)', () => {
    expect(new Dollar(5).equals(new Dollar(6))).to.equal(false);
  })

  it('new Franc(5) should equal new Franc(5)', () => {
    expect(new Franc(5).equals(new Franc(5))).to.equal(true);
  })

  it('new Franc(5) should not equal new Franc(6)', () => {
    expect(new Franc(5).equals(new Franc(6))).to.equal(false);
  })

  it('new Franc(5) should equal new Dollar(5)', () => {
    expect(new Franc(5).equals(new Dollar(5))).to.equal(true);
  })

});