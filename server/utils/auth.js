const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
// set token secret and expiration date
require('dotenv').config();
const secret = 'poopypants';
const expiration = '2h'; //!Keep for Brian's testing!

// const secret = process.env.secret;
// const expiration = process.env.expiration;

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query, req.body, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    // if no token passed, return the req
    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object,
    // which is then passed to the resolver as `context`
    return req;
  },
  signToken: function ({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
};
