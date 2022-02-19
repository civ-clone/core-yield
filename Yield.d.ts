import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
export declare type YieldValue = [number, string];
export interface IYield extends IDataObject {
  add(value: Yield | number, provider: string): void;
  clone(): Yield;
  set(value: Yield | number, provider: string): void;
  subtract(value: Yield | number, provider: string): void;
  value(): number;
  values(): YieldValue[];
}
export declare class Yield extends DataObject implements IYield {
  #private;
  constructor(value?: Yield | number, provider?: string);
  add(value: Yield | number, provider?: string): void;
  clone(): Yield;
  set(value: Yield | number, provider?: string): void;
  subtract(value: Yield | number, provider?: string): void;
  value(): number;
  values(): YieldValue[];
}
export default Yield;
