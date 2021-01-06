import YieldValue from '../YieldValue';
import { expect } from 'chai';

describe('YieldValue', (): void => {
  it('should default to a value of `0` and an empty provider', (): void => {
    const testYieldValue: YieldValue = new YieldValue(0);

    expect(testYieldValue.provider()).to.eql('');
  });

  it('should inherit values when instantiated using another `YieldValue`', (): void => {
    const testYieldValue: YieldValue = new YieldValue(
      new YieldValue(1, 'test-1')
    );

    expect(testYieldValue.value()).to.equal(1);
    expect(testYieldValue.provider()).to.equal('test-1');
  });
});
