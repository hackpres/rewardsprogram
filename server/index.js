const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
// const { startStandaloneServer } = require('@apollo/server/standalone';
// const mockData = require('./data/mockData.json' assert { type: "json" };
// const cors = require('cors');
const { typeDefs, resolvers } = require('./schemas/index');

const server = new ApolloServer({
    typeDefs, 
    resolvers,
});

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client.build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ 
        app,
        path: '/graphql'
    });
    
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
            console.log(
                `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
              );
        });
        // const { url } = await startStandaloneServer(server, {
        //     listen: { port: 3001 },
        // });
        // console.log(`🚀  Server ready at: ${url}`);
    })
}
startApolloServer(typeDefs, resolvers);

