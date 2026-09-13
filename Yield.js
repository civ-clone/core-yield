"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yield = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class Yield extends DataObject_1.DataObject {
    constructor(value = 0, provider = 'initial') {
        super();
        this._values = [];
        this._valueCache = null;
        this.addKey('value', 'values');
        this.add(value, provider);
    }
    add(value, provider = '') {
        if (value instanceof Yield) {
            return this.add(value.value(), provider);
        }
        this._values.push([value, provider]);
        this._valueCache = null;
    }
    clone() {
        return new this.constructor(this);
    }
    set(value, provider = '') {
        this._values.splice(0);
        if (value instanceof Yield) {
            return this.set(value.value(), provider);
        }
        this._values.push([value, provider]);
        this._valueCache = value;
    }
    subtract(value, provider = '') {
        if (value instanceof Yield) {
            return this.subtract(value.value(), provider);
        }
        this._values.push([-value, provider]);
        this._valueCache = null;
    }
    value() {
        if (this._valueCache === null) {
            this._valueCache = this._values.reduce((total, [yieldValue]) => total + yieldValue, 0);
        }
        return this._valueCache;
    }
    values() {
        return this._values;
    }
}
exports.Yield = Yield;
Yield.transient = ['_valueCache'];
exports.default = Yield;
//# sourceMappingURL=Yield.js.map