"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const CatResolver_1 = require("./src/resolvers/CatResolver");
const data_source_1 = require("./src/data-source");
// import { Container } from "typedi";
// import path from "node:path";
// import { Context } from "./authorization/contex.interface";
// import { ErrorLoggerMiddleware} from "./middlewares/error-logger"
// import { ResolveTimeMiddleware} from "./middlewares/resolve-time"
// import { authChecker } from "./authorization/auth-checker";
// import { CatResolverInheritance } from "./src/resolvers/CatResolverInheritance";
async function bootstrap() {
    await data_source_1.AppDataSource.initialize();
    // build TypeGraphQL executable schema
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [CatResolver_1.CatResolver],
        // emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // globalMiddlewares: [ErrorLoggerMiddleware, ResolveTimeMiddleware],
        // container: Container,
        // authChecker,
    });
    // Create GraphQL server
    const server = new apollo_server_1.ApolloServer({ schema,
        // context: () => {
        //   const ctx: Context = {
        //     // create mocked user in context
        //     // in real app you would be mapping user from `req.user` or sth
        //     user: {
        //       id: 1,
        //       name: "Sample user",
        //       roles: ["ADMIN"],
        //     },
        //   };
        //   return ctx;
        // },
    });
    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}
bootstrap();
//# sourceMappingURL=index.js.map