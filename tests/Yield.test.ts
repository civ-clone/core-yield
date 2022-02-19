import { Yield, YieldValue } from '../Yield';
import { expect } from 'chai';

describe('Yield', (): void => {
  it('should default to a value of `0` and an empty provider', (): void => {
    const testYield: Yield = new Yield();

    expect(testYield.value()).to.equal(0);
    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 0, provider: 'initial' }]);
  });

  it('should accept a number as an argument to the constructor', (): void => {
    const testYield: Yield = new Yield(1);

    expect(testYield.value()).to.equal(1);
  });

  it('should accept another `Yield` as an argument to the constructor', (): void => {
    const testYield: Yield = new Yield(new Yield(2));

    expect(testYield.value()).to.equal(2);
  });

  it('should accept a number as an argument to `add`', (): void => {
    const testYield: Yield = new Yield(1);

    testYield.add(2);

    expect(testYield.value()).to.equal(3);
  });

  it('should accept another Yield as an argument to `add`', (): void => {
    const testYield: Yield = new Yield(2);

    testYield.add(new Yield(2));

    expect(testYield.value()).to.equal(4);
  });

  it('should accept a number as an argument to `subtract`', (): void => {
    const testYield: Yield = new Yield(4);

    testYield.subtract(2);

    expect(testYield.value()).to.equal(2);
  });

  it('should accept another `Yield` as an argument to `subtract`', (): void => {
    const testYield: Yield = new Yield(4);

    testYield.subtract(new Yield(2));

    expect(testYield.value()).to.equal(2);
  });

  it('should handle `add`ing a negative number the same as `subtract`', (): void => {
    const testYield: Yield = new Yield(1);

    testYield.add(-1);

    expect(testYield.value()).to.equal(0);
  });

  it('should handle `add`ing a negative number the same as `subtract` with a `Yield`', (): void => {
    const testYield: Yield = new Yield(1);

    testYield.add(new Yield(-2));

    expect(testYield.value()).to.equal(-1);
  });

  it('should handle `subtract`ing a negative number the same as `add`', (): void => {
    const testYield: Yield = new Yield(-4);

    testYield.subtract(-2);

    expect(testYield.value()).to.equal(-2);
  });

  it('should handle `subtract`ing a negative number the same as `add` with a `Yield`', (): void => {
    const testYield: Yield = new Yield(-4);

    testYield.subtract(new Yield(-2));

    expect(testYield.value()).to.equal(-2);
  });

  it('should condense entries when `add`ing a `Yield`', (): void => {
    const testYield: Yield = new Yield(1, 'test-1');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 1, provider: 'test-1' }]);

    testYield.add(2, 'test-2');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: 1, provider: 'test-1' },
      { value: 2, provider: 'test-2' },
    ]);
    expect(testYield.value()).to.equal(3);

    testYield.add(3, 'test-3');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: 1, provider: 'test-1' },
      { value: 2, provider: 'test-2' },
      { value: 3, provider: 'test-3' },
    ]);
    expect(testYield.value()).to.equal(6);

    const testYield2 = new Yield(4, 'test-4');

    testYield2.add(new Yield(5, 'test-5'));
    testYield2.add(6, 'test-6');

    testYield.add(testYield2, 'test-7');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: 1, provider: 'test-1' },
      { value: 2, provider: 'test-2' },
      { value: 3, provider: 'test-3' },
      { value: 15, provider: 'test-7' },
    ]);
    expect(testYield.value()).to.equal(21);
  });

  it("should not use the `Yield`'s provider when `add`ed with a truthy provider passed", (): void => {
    const testYield: Yield = new Yield(1, 'test-1');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 1, provider: 'test-1' }]);

    testYield.add(new Yield(1, 'test-2'), 'test-3');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: 1, provider: 'test-1' },
      { value: 1, provider: 'test-3' },
    ]);
    expect(testYield.value()).to.equal(2);
  });

  it('should condense entries when `subtract`ing a `Yield`', (): void => {
    const testYield: Yield = new Yield(-1, 'test-1');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: -1, provider: 'test-1' }]);

    testYield.subtract(2, 'test-2');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: -1, provider: 'test-1' },
      { value: -2, provider: 'test-2' },
    ]);
    expect(testYield.value()).to.equal(-3);

    testYield.subtract(3, 'test-3');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: -1, provider: 'test-1' },
      { value: -2, provider: 'test-2' },
      { value: -3, provider: 'test-3' },
    ]);
    expect(testYield.value()).to.equal(-6);

    const testYield2 = new Yield(4, 'test-4');

    testYield2.add(new Yield(5, 'test-5'));
    testYield2.add(new Yield(6, 'test-6'));

    expect(testYield2.value()).to.equal(15);

    testYield.subtract(testYield2, 'test-7');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: -1, provider: 'test-1' },
      { value: -2, provider: 'test-2' },
      { value: -3, provider: 'test-3' },
      { value: -15, provider: 'test-7' },
    ]);
    expect(testYield.value()).to.equal(-21);
  });

  it("should not use the `YieldValue`'s provider when `subtract`ed with a truthy provider passed", (): void => {
    const testYield: Yield = new Yield(-1, 'test-1');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: -1, provider: 'test-1' }]);

    testYield.subtract(new Yield(2, 'test-2'), 'test-3');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: -1, provider: 'test-1' },
      { value: -2, provider: 'test-3' },
    ]);
    expect(testYield.value()).to.equal(-3);
  });

  it('should clear history when using `set()`', (): void => {
    const testYield: Yield = new Yield(1, 'test-1');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 1, provider: 'test-1' }]);

    testYield.add(2, 'test-2');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: 1, provider: 'test-1' },
      { value: 2, provider: 'test-2' },
    ]);

    testYield.subtract(1, 'test-3');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([
      { value: 1, provider: 'test-1' },
      { value: 2, provider: 'test-2' },
      { value: -1, provider: 'test-3' },
    ]);

    testYield.set(4, 'test-4');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 4, provider: 'test-4' }]);
    expect(testYield.value()).to.equal(4);

    testYield.set(new Yield(5), 'test-5');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 5, provider: 'test-5' }]);
    expect(testYield.value()).to.equal(5);

    testYield.set(6, 'test-6');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 6, provider: 'test-6' }]);
    expect(testYield.value()).to.equal(6);

    testYield.set(6, 'test-7');

    expect(
      testYield.values().map(([value, provider]: YieldValue): any => ({
        value,
        provider,
      }))
    ).to.eql([{ value: 6, provider: 'test-7' }]);
    expect(testYield.value()).to.equal(6);
  });

  it('should be possible to clone a yield', (): void => {
    const existingYield = new Yield(2),
      clonedYield = existingYield.clone();

    expect(existingYield).to.not.equal(clonedYield);
    expect(existingYield.value()).to.equal(clonedYield.value());

    class YieldA extends Yield {}
    class YieldB extends YieldA {}

    const a = new YieldA(4),
      clonedA = a.clone(),
      b = new YieldB(8),
      clonedB = b.clone();

    expect(a).to.not.equal(clonedA);
    expect(a.value()).to.equal(clonedA.value());
    expect(a.constructor).to.equal(clonedA.constructor);
    expect(b).to.not.equal(clonedB);
    expect(b.value()).to.equal(clonedB.value());
    expect(b.constructor).to.equal(clonedB.constructor);
    expect(b.constructor).to.equal(YieldB);
    expect(b.constructor).to.not.equal(YieldA);
  });
});
