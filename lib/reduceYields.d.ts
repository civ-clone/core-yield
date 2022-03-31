import Yield from '../Yield';
export declare const reduceYields: (
  yields: Yield[],
  ...wantedYields: typeof Yield[]
) => number[];
export declare const reduceYield: (
  yields: Yield[],
  YieldType: typeof Yield
) => number;
