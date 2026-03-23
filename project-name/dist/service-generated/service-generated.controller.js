"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceGeneratedController = void 0;
const common_1 = require("@nestjs/common");
const service_generated_service_1 = require("./service-generated.service");
let ServiceGeneratedController = class ServiceGeneratedController {
    serviceGeneratedService;
    constructor(serviceGeneratedService) {
        this.serviceGeneratedService = serviceGeneratedService;
    }
    findAll() {
        return this.serviceGeneratedService.getData();
    }
};
exports.ServiceGeneratedController = ServiceGeneratedController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceGeneratedController.prototype, "findAll", null);
exports.ServiceGeneratedController = ServiceGeneratedController = __decorate([
    (0, common_1.Controller)('service-generated'),
    __metadata("design:paramtypes", [service_generated_service_1.ServiceGeneratedService])
], ServiceGeneratedController);
//# sourceMappingURL=service-generated.controller.js.map