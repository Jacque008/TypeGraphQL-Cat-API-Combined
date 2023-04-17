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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatResolver = void 0;
const type_graphql_1 = require("type-graphql");
const CatType_1 = require("../entity/CatType");
const data_source_1 = require("../data-source");
const typedi_1 = require("typedi");
let CatResolver = class CatResolver {
    async getCat(id) {
        const catRepository = data_source_1.AppDataSource.getRepository(CatType_1.Cat);
        const cat = await catRepository.findOneBy({ id: id });
        if (!cat) {
            return undefined;
        }
        return cat;
    }
    async getCats({ skip, take }) {
        const catRepository = data_source_1.AppDataSource.getRepository(CatType_1.Cat);
        return await catRepository.find({ skip: skip, take: take });
    }
    async addCat({ name, age, breed, color, energyLevel, temperament }) {
        const catRepository = data_source_1.AppDataSource.getRepository(CatType_1.Cat);
        const catCount = await catRepository.count();
        const cat = new CatType_1.Cat();
        cat.id = catCount + 1;
        cat.name = name;
        cat.age = age;
        cat.breed = breed;
        cat.color = color;
        cat.energyLevel = energyLevel;
        cat.temperament = temperament;
        cat.createdAt = new Date();
        return await catRepository.save(cat);
    }
    // @Authorized()
    async removeCat(id) {
        const catRepository = data_source_1.AppDataSource.getRepository(CatType_1.Cat);
        const cat = await catRepository.findOneBy({ id: id });
        if (!cat) {
            return false;
        }
        await catRepository.remove(cat);
        return true;
    }
    async feedCat(id) {
        const catRepository = data_source_1.AppDataSource.getRepository(CatType_1.Cat);
        const cat = await catRepository.findOneBy({ id: id });
        if (!cat) {
            return undefined;
        }
        cat.energyLevel += 1;
        return await catRepository.save(cat);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => CatType_1.Cat),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "getCat", null);
__decorate([
    (0, type_graphql_1.Query)(() => [CatType_1.Cat]),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CatType_1.GetAllCats]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "getCats", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => CatType_1.Cat),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CatType_1.CatArgs]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "addCat", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "removeCat", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => CatType_1.Cat),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "feedCat", null);
CatResolver = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)()
], CatResolver);
exports.CatResolver = CatResolver;
//# sourceMappingURL=CatResolver.js.map