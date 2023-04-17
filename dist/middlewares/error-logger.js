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
exports.ErrorLoggerMiddleware = void 0;
const typedi_1 = require("typedi");
const type_graphql_1 = require("type-graphql");
const logger_1 = require("../authorization/logger");
let ErrorLoggerMiddleware = class ErrorLoggerMiddleware {
    constructor(logger) {
        this.logger = logger;
    }
    async use({ context, info }, next) {
        var _a;
        try {
            return await next();
        }
        catch (err) {
            this.logger.log({
                message: err.message,
                operation: info.operation.operation,
                fieldName: info.fieldName,
                userName: (_a = context.user) === null || _a === void 0 ? void 0 : _a.name,
            });
            if (!(err instanceof type_graphql_1.ArgumentValidationError)) {
                // hide errors from db like printing sql query
                throw new Error("Unknown error occurred. Try again later!");
            }
            throw err;
        }
    }
};
ErrorLoggerMiddleware = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [logger_1.Logger])
], ErrorLoggerMiddleware);
exports.ErrorLoggerMiddleware = ErrorLoggerMiddleware;
//# sourceMappingURL=error-logger.js.map