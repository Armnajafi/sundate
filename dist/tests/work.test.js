"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sundate_1 = __importDefault(require("../sundate"));
let sundate = new sundate_1.default(1712941445900);
console.log(sundate.show(false));
console.log(sundate.now());
//# sourceMappingURL=work.test.js.map