"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Yield_values, _Yield_valueCache;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yield = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class Yield extends DataObject_1.DataObject {
    constructor(value = 0, provider = 'initial') {
        super();
        _Yield_values.set(this, []);
        _Yield_valueCache.set(this, null);
        this.addKey('value', 'values');
        this.add(value, provider);
    }
    add(value, provider = '') {
        if (value instanceof Yield) {
            return this.add(value.value(), provider);
        }
        __classPrivateFieldGet(this, _Yield_values, "f").push([value, provider]);
        __classPrivateFieldSet(this, _Yield_valueCache, null, "f");
    }
    clone() {
        return new this.constructor(this);
    }
    set(value, provider = '') {
        __classPrivateFieldGet(this, _Yield_values, "f").splice(0);
        if (value instanceof Yield) {
            return this.set(value.value(), provider);
        }
        __classPrivateFieldGet(this, _Yield_values, "f").push([value, provider]);
        __classPrivateFieldSet(this, _Yield_valueCache, value, "f");
    }
    subtract(value, provider = '') {
        if (value instanceof Yield) {
            return this.subtract(value.value(), provider);
        }
        __classPrivateFieldGet(this, _Yield_values, "f").push([-value, provider]);
        __classPrivateFieldSet(this, _Yield_valueCache, null, "f");
    }
    value() {
        if (__classPrivateFieldGet(this, _Yield_valueCache, "f") === null) {
            __classPrivateFieldSet(this, _Yield_valueCache, __classPrivateFieldGet(this, _Yield_values, "f").reduce((total, [yieldValue]) => total + yieldValue, 0), "f");
        }
        return __classPrivateFieldGet(this, _Yield_valueCache, "f");
    }
    values() {
        return __classPrivateFieldGet(this, _Yield_values, "f");
    }
}
exports.Yield = Yield;
_Yield_values = new WeakMap(), _Yield_valueCache = new WeakMap();
exports.default = Yield;
//# sourceMappingURL=Yield.js.map