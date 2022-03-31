import Yield from '../Yield';
import { reduceYield, reduceYields } from '../lib/reduceYields';
import { expect } from 'chai';

describe('lib/reduceYields', () => {
  it('should filter and reduce as expected', () => {
    class Yield1 extends Yield {}
    class Yield2 extends Yield {}
    class Yield3 extends Yield {}
    class Yield4 extends Yield {}

    const yields = [
      new Yield4(3),
      new Yield2(2),
      new Yield1(1),
      new Yield3(0),
      new Yield1(2),
      new Yield1(3),
      new Yield2(2),
      new Yield(9),
    ];

    expect(reduceYield(yields, Yield1)).equal(6);
    expect(reduceYield(yields, Yield2)).equal(4);
    expect(reduceYield(yields, Yield3)).equal(0);
    expect(reduceYield(yields, Yield4)).equal(3);

    // should include subclasses
    expect(reduceYield(yields, Yield)).equal(22);

    expect(reduceYields(yields, Yield1)).deep.equal([6]);
    expect(reduceYields(yields, Yield2, Yield3, Yield4)).deep.equal([4, 0, 3]);
  });
});
