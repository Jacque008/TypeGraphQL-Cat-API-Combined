"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const CatType_1 = require("./entity/CatType");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jie",
    password: "pwd123",
    database: "cat_db",
    synchronize: true,
    logging: false,
    entities: [CatType_1.Cat],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map