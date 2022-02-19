import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';

export type YieldValue = [number, string];

export interface IYield extends IDataObject {
  add(value: Yield | number, provider: string): void;
  clone(): Yield;
  set(value: Yield | number, provider: string): void;
  subtract(value: Yield | number, provider: string): void;
  value(): number;
  values(): YieldValue[];
}

export class Yield extends DataObject implements IYield {
  #values: YieldValue[] = [];
  #valueCache: number | null = null;

  constructor(value: Yield | number = 0, provider = 'initial') {
    super();

    this.addKey('value', 'values');

    this.add(value, provider);
  }

  add(value: Yield | number, provider = ''): void {
    if (value instanceof Yield) {
      return this.add(value.value(), provider);
    }

    this.#values.push([value, provider]);

    this.#valueCache = null;
  }

  clone(): Yield {
    return new (this.constructor as typeof Yield)(this);
  }

  set(value: Yield | number, provider = ''): void {
    this.#values.splice(0);

    if (value instanceof Yield) {
      return this.set(value.value(), provider);
    }

    this.#values.push([value, provider]);

    this.#valueCache = value;
  }

  subtract(value: Yield | number, provider = ''): void {
    if (value instanceof Yield) {
      return this.subtract(value.value(), provider);
    }

    this.#values.push([-value, provider]);

    this.#valueCache = null;
  }

  value(): number {
    if (this.#valueCache === null) {
      this.#valueCache = this.#values.reduce(
        (total: number, [yieldValue]: YieldValue): number => total + yieldValue,
        0
      );
    }

    return this.#valueCache;
  }

  values(): YieldValue[] {
    return this.#values;
  }
}

export default Yield;
