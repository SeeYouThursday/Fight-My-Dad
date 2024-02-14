const { User, Dad } = require('../models');

const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findOne({ _id: context.user._id })
          .populate({
            path: 'dad',
            options: { strictPopulate: false },
          })
          .select('-__v -password');

        return data;
      } else {
        throw new AuthenticationError('You need to be logged in');
      }
    },

    getAllDads: async (parent, args, context) => {
      if (context.user) {
        return Dad.find({});
        // return data;
      } else {
        throw new AuthenticationError(
          `There was a problem getting your dad, maybe he's out for milk.`
        );
      }
    },

    getDad: async (parent, args, context) => {
      if (context.user) {
        return Dad.find({ _id: context.dad_id });
        // return data;
      } else {
        throw new AuthenticationError(
          `There was a problem getting your dad, maybe he's out for milk.`
        );
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
    login: async (parent, { username, password }) => {
      try {
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
      } catch (err) {
        console.log(err);
      }
    },

    addDad: async (parent, { input }, context) => {
      if (context.user) {
        try {
          const newDad = await Dad.create(input);
          User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $addToSet: { savedDads: newDad._id },
            },
            { new: true, runValidators: true }
          ).exec();
          return newDad;
        } catch (err) {
          // If user attempts to execute this mutation and isn't logged in, throw an error
          throw new AuthenticationError('User is not authenticated.', err);
        }
      }
    },
    updateWinLossCounts: async (_, { dadId, isWin }) => {
      try {
        let dad = await Dad.findById(dadId);
        if (!dad) {
          throw new Error('Dad not found');
        }
        if (isWin) {
          dad.winNum++;
        } else {
          dad.lossNum++;
        }
        await dad.save();
        return dad;
      } catch (err) {
        throw new Error(err);
      }
    },

    removeDad: async (parent, { dadId }, context) => {
      try {
        console.log('Removing dad with ID:', dadId);
        if (!context.user) {
          throw new AuthenticationError('User is not authenticated.');
        }
        const removedDad = await Dad.findByIdAndDelete(dadId);

        if (!removedDad) {
          throw new Error(`Dad with ID ${dadId} not found.`);
        }

        console.log(`Dad with ID ${dadId} removed successfully.`);

        return removedDad;
      } catch (err) {
        console.error('Error removing dad:', err);
        throw err;
      }
    },
  },
};

module.exports = resolvers;
