import { IConstructor } from "@civ-clone/core-registry/Registry";
import Yield from './Yield';

const negate = (value: Yield | number): number => {
  if (value instanceof Yield) {
    return -value.value();
  }

  return -value;
};

export class NegativeYield extends Yield {
  add(value: Yield | number, provider: string = ''): void {
    super.add(negate(value), provider);
  }

  set(value: Yield | number, provider: string = ''): void {
    super.set(negate(value), provider);
  }

  subtract(value: Yield | number, provider: string = ''): void {
    super.subtract(negate(value), provider);
  }
}

export default NegativeYield;

export const makeNegative = (Target: IConstructor): void => {
  ['add', 'set', 'subtract'].forEach((property) =>
    Object.defineProperty(
      Target.prototype,
      property,
      Object.getOwnPropertyDescriptor(NegativeYield.prototype, property) ||
        Object.create(null)
    )
  );
};
