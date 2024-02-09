const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    password: String!
    username: String
    dad: [String]
  }

  type Dad {

    _id: ID
    dadName: String
    nickname: String
    userId: Int
    entryMusic: String
    dadJoke: String

    weight: Int
    armLength: Int
    weapon: Int
    winNum: Int
    lossNum: Int
  }

  type Stats {

    _id: ID
    dadId: ID
    dadName: String

    WinNum: Int
    LossNum: Int
  }  

  type Auth {
    token: ID
    user: User
}

input dadStats {
  _id: ID
  dadName: String
  nickname: String
  entryMusic: String
  dadJoke: String
  weight: Int
  armLength: Int
  weapon: String

  winNum: Int
  lossNum: Int
}

  type Query {
    me: User

  }

  type Mutation {
    addUser(firstName: String, lastName: String, username: String!, password: String!): Auth
    loginUser(username: String, password: String!): Auth


  }
`;

module.exports = typeDefs;
