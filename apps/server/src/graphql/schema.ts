import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} from "graphql";
import pool from "../config/db";
import { ResultSetHeader } from "mysql2";

// Define Bet Type
const BetType = new GraphQLObjectType({
  name: "Bet",
  fields: {
    uid: { type: GraphQLInt },
    userId: { type: GraphQLString },
    outcomes: { type: GraphQLString },
    wagerAmount: { type: GraphQLFloat },
    currency: { type: GraphQLString },
    status: { type: GraphQLString },
  },
});

// Queries
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    getUserBets: {
      type: new GraphQLList(BetType),
      args: { userId: { type: GraphQLString } },
      resolve: async (_, { userId }) => {
        const [rows] = await pool.query("SELECT * FROM bets WHERE userId = ?", [
          userId,
        ]);
        return rows;
      },
    },
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    placeBet: {
      type: BetType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLString) },
        outcomes: { type: new GraphQLNonNull(GraphQLString) }, // Store JSON as string
        wagerAmount: { type: new GraphQLNonNull(GraphQLFloat) },
        currency: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, { userId, outcomes, wagerAmount, currency }) => {
        const [result] = await pool.query<ResultSetHeader>(
          "INSERT INTO bets (userId, outcomes, wagerAmount, currency) VALUES (?, ?, ?, ?)",
          [userId, outcomes, wagerAmount, currency]
        );
        return {
          uid: result.insertId,
          userId,
          outcomes,
          wagerAmount,
          currency,
          status: "pending",
        };
      },
    },
  },
});

// Export GraphQL Schema
export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
