"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGeneratedService = void 0;
const common_1 = require("@nestjs/common");
const data_shaper_1 = require("./domain/data-shaper");
let FileGeneratedService = class FileGeneratedService {
    async getShapedProducts(view) {
        const response = await fetch('http://otherview.org/3D4M/data/products.json');
        if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
        }
        const rawData = await response.json();
        const shaper = new data_shaper_1.DataShaper();
        return shaper.shape(rawData, view);
    }
};
exports.FileGeneratedService = FileGeneratedService;
exports.FileGeneratedService = FileGeneratedService = __decorate([
    (0, common_1.Injectable)()
], FileGeneratedService);
//# sourceMappingURL=file-generated.service.js.map