import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';

export interface IYieldModifier extends IDataObject {
  provider(): any;
  value(): number;
}

export class YieldValue extends DataObject implements IYieldModifier {
  #provider: string;
  #value: number;

  constructor(value: number | YieldValue, provider: string = '') {
    super();

    if (value instanceof YieldValue) {
      provider = provider || value.provider();
      value = value.value();
    }

    this.#value = value;
    this.#provider = provider;

    this.addKey('value', 'provider');
  }

  provider(): string {
    return this.#provider;
  }

  value(): number {
    return this.#value;
  }
}

export default YieldValue;
