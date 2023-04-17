import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cat } from "./entity/CatType"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jie",
    password: "pwd123",
    database: "cat_db",
    synchronize: true,
    logging: false,
    entities: [Cat],
    migrations: [],
    subscribers: [],
})
