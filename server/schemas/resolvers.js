
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );

        return data;
      } else {
        throw AuthenticationError;
      }
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

        console.log(token);
        return { token, user };
      } catch (err) {
        throw new AuthenticationError(`Error Adding Signing Up ${err}`);

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
    removeDad: async (parent, { dad }) => {},
  },
};

module.exports = resolvers;


// saveDad: async (parent, { dad }, context) => {
//   if (context.user) {
//     try {
//       return User.findOneAndUpdate(
//         { _id: context.user._id },
//         {
//           $addToSet: { savedDads: { dad } },
//         },
//         { new: true, runValidators: true }
//       );
//     } catch (err) {
//       // If user attempts to execute this mutation and isn't logged in, throw an error
//       throw new AuthenticationError('User is not authenticated.');
//     }
//   }
// },
// removeDad: async (parent, { dad }) => {},

// getDad: async (parent, { userId }) => {
//   const params = userId ? { userId } : {};
//   return Dad.find(params);
// },
// getAllDads: async (parent, args) => {
//   return Dad.find({});
// },

