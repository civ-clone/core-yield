"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNegative = exports.NegativeYield = void 0;
const Yield_1 = require("./Yield");
const negate = (value) => {
    if (value instanceof Yield_1.default) {
        return -value.value();
    }
    return -value;
};
class NegativeYield extends Yield_1.default {
    add(value, provider = '') {
        super.add(negate(value), provider);
    }
    set(value, provider = '') {
        super.set(negate(value), provider);
    }
    subtract(value, provider = '') {
        super.subtract(negate(value), provider);
    }
}
exports.NegativeYield = NegativeYield;
exports.default = NegativeYield;
const makeNegative = (Target) => {
    ['add', 'set', 'subtract'].forEach((property) => Object.defineProperty(Target.prototype, property, Object.getOwnPropertyDescriptor(NegativeYield.prototype, property) ||
        Object.create(null)));
};
exports.makeNegative = makeNegative;
//# sourceMappingURL=NegativeYield.js.map