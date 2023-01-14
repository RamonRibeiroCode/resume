import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clcihev152dd001tafgy2fe2j/master",
  cache: new InMemoryCache(),
})
