const { User, Stats, Dad } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { userId, username }) => {
      try {
        return User.findOne({
          $or: [{ _id: userId }, { username: username }],
        });
      } catch (err) {
        console.log(err);
      }
    },
    dad: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Dad.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, username, password }) => {
      try {
        const user = await User.create({
          firstName,
          lastName,
          username,
          password,
        });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw AuthenticationError;
      }
    },
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError(
          'User not found. Do you have an account?'
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials!');
      }

      const token = signToken(user);
      console.log('Logged IN');
      return { token, user };
    },
    saveDad: async (parent, { dad }, context) => {
      if (context.user) {
        try {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $addToSet: { savedDads: { dad } },
            },
            { new: true, runValidators: true }
          );
        } catch (err) {
          // If user attempts to execute this mutation and isn't logged in, throw an error
          throw new AuthenticationError('User is not authenticated.');
        }
      }
    },
    removeDad: async (parent, { dad }) => {},
  },
};

module.exports = resolvers;
