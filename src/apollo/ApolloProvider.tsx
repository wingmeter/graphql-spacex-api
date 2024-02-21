import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from "react";

const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/',
    cache: new InMemoryCache(),
});

type Props = {
    children: string | React.ReactNode
}
const ApolloAppProvider = ({children}: Props) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloAppProvider;