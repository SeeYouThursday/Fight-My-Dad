const { User, Stats, Dad } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    dad: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Dad.find(params);
    },

    }
  },
  Mutation: {
    // login_user
    login_user: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    },
  },
};

module.exports = resolvers;