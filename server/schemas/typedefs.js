const typeDefs = `
  type User {
    _id: ID!
    FirstName: String!
    LastName: String!
    Password: String!
    Username: String!
  }

  type Dad {
    _id: ID!
    dadName: String!
    nickname: String!
    userId: Int!
    entryMusic: String!
    dadJoke: String!
    weight: Int
    armLength: Int
    weapon: Int
    winNum: Int
    lossNum: Int
  }

  type Stats {
    _id: ID!
    dadId: ID!
    dadName: String!
    WinNum: Int
    LossNum: Int
  }  

  type Auth {
    token: ID!
    user: User
}

input DadStats {
  dadName: String!
  nickname: String!
  entryMusic: String!
  dadJoke: String!
  weight: Int!
  armLength: Int!
  winNum: Int
  lossNum: Int
}

  type Query {
    me: User
    dad: User #Dad returns a user obj? 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth

    saveDad(input: DadStats): User
    removeDad(_id: ID!): User
    #/////consider adding a dadId to Dad schema to reference above
  }
`;

module.exports = typeDefs;
