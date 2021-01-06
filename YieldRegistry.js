"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.YieldRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const Yield_1 = require("./Yield");
class YieldRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(Yield_1.default);
    }
}
exports.YieldRegistry = YieldRegistry;
exports.instance = new YieldRegistry();
exports.default = YieldRegistry;
//# sourceMappingURL=YieldRegistry.js.map