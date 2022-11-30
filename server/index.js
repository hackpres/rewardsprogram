import express from 'express';
import path from 'path';
import db from './config/connection.js';
import { ApolloServer } from 'apollo-server-express';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import mockData from './data/mockData.json' assert { type: "json" };
import { typeDefs, resolvers } from './schemas';

const server = new ApolloServer({
    typeDefs, 
    resolvers,
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const __dirname = path.resolve(path.dirname(''));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client.build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    
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

