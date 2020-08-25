import ApolloClient from "apollo-boost";

import { TOKEN } from "../constants";

const client = new ApolloClient({
  uri: "http://192.168.1.114:9002/graphql",
  //"https://graphqlzero.almansi.me/api"
  fetchOptions: {
    credentials: "include",
  },
  request: async (operation) => {
    const token = await localStorage.getItem(TOKEN);
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});

export default client;
