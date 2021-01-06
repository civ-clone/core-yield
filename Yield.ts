import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import YieldValue from './YieldValue';

export interface IYield extends IDataObject {
  add(value: Yield | YieldValue | number, provider: string): void;
  clone(): Yield;
  set(value: Yield | YieldValue | number, provider: string): void;
  subtract(value: Yield | YieldValue | number, provider: string): void;
  value(): number;
  values(): YieldValue[];
}

export class Yield extends DataObject implements IYield {
  #values: YieldValue[] = [];

  constructor(
    value: Yield | YieldValue | number = 0,
    provider: string = 'initial'
  ) {
    super();

    this.addKey('value', 'values');

    this.add(value, provider);
  }

  add(value: Yield | YieldValue | number, provider: string = ''): void {
    if (value instanceof Yield) {
      return this.add(value.value(), provider);
    }

    if (value instanceof YieldValue) {
      return this.add(value.value(), provider || value.provider());
    }

    this.#values.push(new YieldValue(value, provider));
  }

  clone(): Yield {
    return new (this.constructor as typeof Yield)(this);
  }

  set(value: Yield | YieldValue | number, provider: string = ''): void {
    this.#values.splice(0);

    if (value instanceof Yield) {
      return this.set(value.value(), provider);
    }

    if (value instanceof YieldValue) {
      return this.set(value.value(), provider || value.provider());
    }

    this.#values.push(new YieldValue(value, provider));
  }

  subtract(value: Yield | YieldValue | number, provider: string = ''): void {
    if (value instanceof Yield) {
      return this.subtract(value.value(), provider);
    }

    if (value instanceof YieldValue) {
      return this.subtract(value.value(), provider || value.provider());
    }

    this.#values.push(new YieldValue(-value, provider));
  }

  value(): number {
    return this.#values.reduce(
      (total: number, yieldValue: YieldValue): number =>
        total + yieldValue.value(),
      0
    );
  }

  values(): YieldValue[] {
    return this.#values;
  }
}

export default Yield;
