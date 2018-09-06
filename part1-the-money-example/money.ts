export abstract class Money {
  abstract times(multiplier: number): Money;

  protected _amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  currency() {
    return this._currency;
  }

  public equals(object: any): boolean {
    const money = <Money> object;
    return this._amount === money._amount && typeof this === typeof money;
  }
}

export class Dollar extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Dollar {
    return Money.dollar(this._amount * multiplier);
  }

}

export class Franc extends Money {

  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.franc(this._amount * multiplier);
  }

}