export interface IYieldModifier {
  provider(): any;
  value(): number;
}
export declare class YieldValue implements IYieldModifier {
  #private;
  constructor(value: number | YieldValue, provider?: string);
  provider(): string;
  value(): number;
}
export default YieldValue;
