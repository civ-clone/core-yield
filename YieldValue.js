"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _provider, _value;
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldValue = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class YieldValue extends DataObject_1.DataObject {
    constructor(value, provider = '') {
        super();
        _provider.set(this, void 0);
        _value.set(this, void 0);
        if (value instanceof YieldValue) {
            provider = provider || value.provider();
            value = value.value();
        }
        __classPrivateFieldSet(this, _value, value);
        __classPrivateFieldSet(this, _provider, provider);
        this.addKey('value', 'provider');
    }
    provider() {
        return __classPrivateFieldGet(this, _provider);
    }
    value() {
        return __classPrivateFieldGet(this, _value);
    }
}
exports.YieldValue = YieldValue;
_provider = new WeakMap(), _value = new WeakMap();
exports.default = YieldValue;
//# sourceMappingURL=YieldValue.js.map