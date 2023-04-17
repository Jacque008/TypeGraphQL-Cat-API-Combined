"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const CatResolver_1 = require("./src/resolvers/CatResolver");
const data_source_1 = require("./src/data-source");
const typedi_1 = require("typedi");
const node_path_1 = __importDefault(require("node:path"));
const error_logger_1 = require("./middlewares/error-logger");
const resolve_time_1 = require("./middlewares/resolve-time");
const auth_checker_1 = require("./authorization/auth-checker");
// import { CatResolverInheritance } from "./src/resolvers/CatResolverInheritance";
async function bootstrap() {
    await data_source_1.AppDataSource.initialize();
    // build TypeGraphQL executable schema
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [CatResolver_1.CatResolver],
        emitSchemaFile: node_path_1.default.resolve(__dirname, "schema.gql"),
        globalMiddlewares: [error_logger_1.ErrorLoggerMiddleware, resolve_time_1.ResolveTimeMiddleware],
        container: typedi_1.Container,
        authChecker: auth_checker_1.authChecker,
    });
    // Create GraphQL server
    const server = new apollo_server_1.ApolloServer({
        schema,
        playground: true,
        formatError: (err) => {
            console.log("The Error is: ", err);
            return err;
        },
        context: () => {
            const ctx = {
                // create mocked user in context
                // in real app you would be mapping user from `req.user` or sth
                user: {
                    id: 1,
                    name: "Sample user",
                    roles: ["REGULAR"],
                },
            };
            return ctx;
        },
    });
    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}
bootstrap();
//# sourceMappingURL=index.js.map