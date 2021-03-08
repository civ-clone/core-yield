import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
export interface IYieldModifier extends IDataObject {
  provider(): any;
  value(): number;
}
export declare class YieldValue extends DataObject implements IYieldModifier {
  #private;
  constructor(value: number | YieldValue, provider?: string);
  provider(): string;
  value(): number;
}
export default YieldValue;
