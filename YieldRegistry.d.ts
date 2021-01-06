import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Yield from './Yield';
export interface IYieldRegistry extends IConstructorRegistry<Yield> {}
export declare class YieldRegistry
  extends ConstructorRegistry<Yield>
  implements IYieldRegistry {
  constructor();
}
export declare const instance: YieldRegistry;
export default YieldRegistry;
