export interface IYieldModifier {
  provider(): any;
  value(): number;
}

export class YieldValue implements IYieldModifier {
  #provider: string;
  #value: number;

  constructor(value: number | YieldValue, provider: string = '') {
    if (value instanceof YieldValue) {
      provider = provider || value.provider();
      value = value.value();
    }

    this.#value = value;
    this.#provider = provider;
  }

  provider(): string {
    return this.#provider;
  }

  value(): number {
    return this.#value;
  }
}

export default YieldValue;
