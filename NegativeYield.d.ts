import { IConstructor } from '@civ-clone/core-registry/Registry';
import Yield from './Yield';
export declare class NegativeYield extends Yield {
  add(value: Yield | number, provider?: string): void;
  set(value: Yield | number, provider?: string): void;
  subtract(value: Yield | number, provider?: string): void;
}
export default NegativeYield;
export declare const makeNegative: (Target: IConstructor) => void;
