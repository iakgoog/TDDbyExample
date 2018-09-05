export abstract class Money {
  abstract times(multiplier: number): Money;

  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  public equals(object: any): boolean {
    const money = <Money> object;
    return this.amount === money.amount && typeof this === typeof money;
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}