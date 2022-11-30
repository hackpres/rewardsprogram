import { User } from '../models';

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
    },
};

module.exports = resolvers;