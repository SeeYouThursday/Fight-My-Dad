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
    DadName: String!
    Nickname: String!
    User: Int
    EntryMusic: String!
    DadJoke: String!
    Weight: Int
    ArmLength: Int
    Weapon: Int
    WinNum: Int
    LossNum: Int
  }

  type Stats {
    _id: ID!
    User: Int
    WinNum: Int
    LossNum: Int
  }  

  type Query {
    user: [User]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;