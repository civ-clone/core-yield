"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceYield = exports.reduceYields = void 0;
const reduceYields = (yields, ...wantedYields) => yields.reduce((totals, currentYield) => {
    const yieldIndex = wantedYields.findIndex((YieldType) => currentYield instanceof YieldType);
    if (yieldIndex === -1) {
        return totals;
    }
    totals[yieldIndex] += currentYield.value();
    return totals;
}, wantedYields.map(() => 0));
exports.reduceYields = reduceYields;
const reduceYield = (yields, YieldType) => { var _a; return (_a = (0, exports.reduceYields)(yields, YieldType).shift()) !== null && _a !== void 0 ? _a : 0; };
exports.reduceYield = reduceYield;
//# sourceMappingURL=reduceYields.js.map