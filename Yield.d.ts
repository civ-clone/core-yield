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
export declare class Yield extends DataObject implements IYield {
  #private;
  constructor(value?: Yield | YieldValue | number, provider?: string);
  add(value: Yield | YieldValue | number, provider?: string): void;
  clone(): Yield;
  set(value: Yield | YieldValue | number, provider?: string): void;
  subtract(value: Yield | YieldValue | number, provider?: string): void;
  value(): number;
  values(): YieldValue[];
}
export default Yield;
