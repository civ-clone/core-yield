import Yield from '../Yield';

export const reduceYields = (
  yields: Yield[],
  ...wantedYields: typeof Yield[]
): number[] =>
  yields.reduce(
    (totals, currentYield) => {
      const yieldIndex = wantedYields.findIndex(
        (YieldType) => currentYield instanceof YieldType
      );

      if (yieldIndex === -1) {
        return totals;
      }

      totals[yieldIndex] += currentYield.value();

      return totals;
    },
    wantedYields.map(() => 0)
  );

export const reduceYield = (yields: Yield[], YieldType: typeof Yield): number =>
  reduceYields(yields, YieldType).shift() ?? 0;
