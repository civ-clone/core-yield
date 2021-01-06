"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _values;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yield = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const YieldValue_1 = require("./YieldValue");
class Yield extends DataObject_1.DataObject {
    constructor(value = 0, provider = 'initial') {
        super();
        _values.set(this, []);
        this.addKey('value', 'values');
        this.add(value, provider);
    }
    add(value, provider = '') {
        if (value instanceof Yield) {
            return this.add(value.value(), provider);
        }
        if (value instanceof YieldValue_1.default) {
            return this.add(value.value(), provider || value.provider());
        }
        __classPrivateFieldGet(this, _values).push(new YieldValue_1.default(value, provider));
    }
    clone() {
        return new this.constructor(this);
    }
    set(value, provider = '') {
        __classPrivateFieldGet(this, _values).splice(0);
        if (value instanceof Yield) {
            return this.set(value.value(), provider);
        }
        if (value instanceof YieldValue_1.default) {
            return this.set(value.value(), provider || value.provider());
        }
        __classPrivateFieldGet(this, _values).push(new YieldValue_1.default(value, provider));
    }
    subtract(value, provider = '') {
        if (value instanceof Yield) {
            return this.subtract(value.value(), provider);
        }
        if (value instanceof YieldValue_1.default) {
            return this.subtract(value.value(), provider || value.provider());
        }
        __classPrivateFieldGet(this, _values).push(new YieldValue_1.default(-value, provider));
    }
    value() {
        return __classPrivateFieldGet(this, _values).reduce((total, yieldValue) => total + yieldValue.value(), 0);
    }
    values() {
        return __classPrivateFieldGet(this, _values);
    }
}
exports.Yield = Yield;
_values = new WeakMap();
exports.default = Yield;
//# sourceMappingURL=Yield.js.map