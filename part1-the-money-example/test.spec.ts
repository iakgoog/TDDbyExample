import { Dollar, Franc, Money } from './money';
import { expect } from 'chai';
import 'mocha';

describe('Test Dollar Multiplication', () => {

  let five: Dollar;

  before(() => {
    five = Money.dollar(5);
  });

  it('Dollar(5).times(2) should equal 10', () => { // use to.deep.equal to compare objects
    expect(five.times(2)).to.deep.equal(Money.dollar(10));
  });

  it('Dollar(5).times(3) should equal 15', () => {
    expect(five.times(3)).to.deep.equal(Money.dollar(15));
  });

});

describe('Test Franc Multiplication', () => {

  let five: Franc;

  before(() => {
    five = Money.franc(5);
  })

  it('Franc(5).times(2) should equal 10', () => { // use to.deep.equal to compare objects
    expect(five.times(2)).to.deep.equal(Money.franc(10));
  });

  it('Franc(5).times(3) should equal 15', () => {
    expect(five.times(3)).to.deep.equal(Money.franc(15));
  });

});

describe('Test Equality', () => {

  it('Money.dollar(5) should equal Money.dollar(5)', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).to.equal(true);
  })

  it('Money.dollar(5) should not equal new Dollar(6)', () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).to.equal(false);
  })

  it('Money.franc(5) should equal Money.franc(5)', () => {
    expect(Money.franc(5).equals(Money.franc(5))).to.equal(true);
  })

  it('Money.franc(5) should not equal Money.franc(6)', () => {
    expect(Money.franc(5).equals(Money.franc(6))).to.equal(false);
  })

  it('Money.franc(5) should equal Money.dollar(5)', () => {
    expect(Money.franc(5).equals(Money.dollar(5))).to.equal(true);
  })

});

describe('Test Currency', () => {

  it('USD should equal Money.dollar(1).currency()', () => {
    expect('USD').to.equal(Money.dollar(1).currency());
  })

  it('CHF should equal Money.dollar(1).currency()', () => {
    expect('CHF').to.equal(Money.franc(1).currency());
  })

});