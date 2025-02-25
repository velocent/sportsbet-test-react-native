import { Environment, Network, RecordSource, Store } from "relay-runtime";

const API_URL = "http://172.16.101.118:5000/graphql";

const fetchQuery = async (request: any, variables: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    query: request.text,
    variables,
  });
  try {
    const response = await fetch(API_URL, {
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
    console.log(API_URL);
    throw err;
    console.log("err on fetch graphql", err);
    console.log('------')
    console.log(request.text)
    console.log('------')
    console.log(variables)

    console.log('------')
    console.log(body)
    throw err;
  }
};

export const relayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default relayEnvironment;
