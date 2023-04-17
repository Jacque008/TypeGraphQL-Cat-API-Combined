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
exports.GetAllCats = exports.CatArgs = exports.Cats = exports.Cat = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
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
let Cats = class Cats {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Cat]),
    __metadata("design:type", Array)
], Cats.prototype, "cats", void 0);
Cats = __decorate([
    (0, type_graphql_1.ObjectType)()
], Cats);
exports.Cats = Cats;
let CatArgs = 
// export class CatArgs implements Partial<GeneralResource>  {
class CatArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatArgs.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CatArgs.prototype, "age", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatArgs.prototype, "breed", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatArgs.prototype, "color", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CatArgs.prototype, "energyLevel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CatArgs.prototype, "temperament", void 0);
CatArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
    // export class CatArgs implements Partial<GeneralResource>  {
], CatArgs);
exports.CatArgs = CatArgs;
let GetAllCats = class GetAllCats {
    constructor() {
        this.skip = 0;
        this.take = 10;
    }
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], GetAllCats.prototype, "skip", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], GetAllCats.prototype, "take", void 0);
GetAllCats = __decorate([
    (0, type_graphql_1.ArgsType)()
], GetAllCats);
exports.GetAllCats = GetAllCats;
//# sourceMappingURL=CatType.js.map