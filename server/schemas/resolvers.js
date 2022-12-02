const { User } = require('../models');
// import mockData from '../data/mockData.json' assert { type: "json" };

const resolvers = {
    Query: {
        users: async () => {
            return User.find({});
        },
    },
};

module.exports = resolvers;