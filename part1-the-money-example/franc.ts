export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(object: any): boolean {
    const franc = <Franc> object;
    return this.amount === franc.amount;
  }
}