import { Environment, Network, RecordSource, Store } from "relay-runtime";
// @ts-ignore
import { GRAPHQL_URL } from "@env";

// const API_URL = "http://127.0.0.1:5000/graphql";

const fetchQuery = async (request: any, variables: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    query: request.text,
    variables,
  });
  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    if (data.errors) {
      throw data.errors;
    }

    return data;
  } catch (err) {
    console.error(err)
    throw err;
  }
};

export const relayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default relayEnvironment;
