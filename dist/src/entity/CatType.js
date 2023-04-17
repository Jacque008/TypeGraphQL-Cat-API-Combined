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
exports.GetCatsArgs = exports.AddCatInput = exports.Cat = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const log_access_1 = require("../../middlewares/log-access");
// import { Basic, GeneralResource } from "../../resource/generalType";
let Cat = class Cat {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], Cat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, type_graphql_1.UseMiddleware)(log_access_1.LogAccessMiddleware),
    __metadata("design:type", Number)
], Cat.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Cat.prototype, "breed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Cat.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], Cat.prototype, "energyLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Cat.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], Cat.prototype, "temperament", void 0);
Cat = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Cat);
exports.Cat = Cat;
// @ObjectType()
// export class Cats {
//   @Field(() => [Cat])
//   cats!: Cat[];
// }
let AddCatInput = 
// export class CatArgs implements Partial<GeneralResource>  {
class AddCatInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddCatInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AddCatInput.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddCatInput.prototype, "breed", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddCatInput.prototype, "color", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AddCatInput.prototype, "energyLevel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], AddCatInput.prototype, "temperament", void 0);
AddCatInput = __decorate([
    (0, type_graphql_1.InputType)()
    // export class CatArgs implements Partial<GeneralResource>  {
], AddCatInput);
exports.AddCatInput = AddCatInput;
let GetCatsArgs = class GetCatsArgs {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], GetCatsArgs.prototype, "skip", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], GetCatsArgs.prototype, "take", void 0);
GetCatsArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], GetCatsArgs);
exports.GetCatsArgs = GetCatsArgs;
//# sourceMappingURL=CatType.js.map