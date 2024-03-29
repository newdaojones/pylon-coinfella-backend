import { ApolloServer } from "apollo-server-express";
import { NonEmptyArray, buildSchema } from "type-graphql";
import { Container } from "typedi";
import * as _ from "lodash";

import { Express } from "express";
import cors from "cors";
import { CheckoutResolver } from "./resolvers/checkout.resolver";
import { authMiddlewareForGraphql } from "./middleware/auth";
import { customAuthChecker } from "./auth/authChecker";
import { UserResolver } from "./resolvers/user.resolver";
import { CheckoutRequestResolver } from "./resolvers/checkoutRequest.resolver";

const context = ({ req, connection }: { req: any; connection: any }) => {
  if (connection) {
    return connection.context;
  }

  return {
    user: _.get(req, "user"),
  };
};

export const initGraphql = async (app: Express) => {
  const schema = await buildSchema({
    resolvers: [UserResolver, CheckoutResolver, CheckoutRequestResolver],
    authChecker: customAuthChecker,
    container: Container,
  });

  const server = new ApolloServer({
    schema,
    context,
    plugins: [],
  });

  await server.start();

  app.use(cors());
  app.use("/graphql", authMiddlewareForGraphql);

  server.applyMiddleware({ app });
};
