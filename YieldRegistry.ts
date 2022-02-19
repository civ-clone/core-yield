import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Yield from './Yield';

export interface IYieldRegistry extends IConstructorRegistry<Yield> {}

export class YieldRegistry
  extends ConstructorRegistry<Yield>
  implements IYieldRegistry
{
  constructor() {
    super(Yield);
  }
}

export const instance: YieldRegistry = new YieldRegistry();

export default YieldRegistry;
