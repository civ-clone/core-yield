import NegativeYield, { makeNegative } from '../NegativeYield';
import { expect } from 'chai';
import Yield from '../Yield';

describe('NegativeYield', (): void => {
  it('should have a negative value', (): void => {
    const testYield = new NegativeYield(1);

    expect(testYield.value()).to.equal(-1);

    testYield.add(2);

    expect(testYield.value()).to.equal(-3);

    testYield.subtract(1);

    expect(testYield.value()).to.equal(-2);
  });

  it('should be possible to apply the `NegativeYield` methods to another `Yield`', (): void => {
    class TestYield extends Yield {}
    class NegativeTestYield extends TestYield {}

    const testYield = new TestYield(1);

    makeNegative(NegativeTestYield);

    const negativeTestYield = new NegativeTestYield(1);

    expect(testYield.value()).to.equal(1);
    expect(negativeTestYield.value()).to.equal(-1);

    negativeTestYield.add(2);

    expect(negativeTestYield.value()).to.equal(-3);

    negativeTestYield.subtract(1);

    expect(negativeTestYield.value()).to.equal(-2);
    expect(testYield instanceof TestYield).true;
    expect(negativeTestYield instanceof TestYield).true;
    expect(testYield instanceof NegativeTestYield).false;
    expect(negativeTestYield instanceof NegativeTestYield).true;
  });
});
