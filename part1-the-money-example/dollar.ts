export class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: any): boolean {
    const dollar = <Dollar> object;
    return this.amount === dollar.amount;
  }
}