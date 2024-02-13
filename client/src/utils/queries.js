import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      firstName
      lastName
      savedDads 
    }
  }
`;

export const QUERY_DAD = gql`
query getDad{
  getDad {
    _id
    dadName
    nickname
    userId
    entryMusic
    dadJoke
    weight
    armLength
    experience
    winNum
    lossNum
    icon
  }
}
`;

export const QUERY_DADS = gql`
query getAllDads{
  getAllDads {
    _id
    dadName
    nickname
    userId
    entryMusic
    dadJoke
    weight
    armLength
    experience
    winNum
    lossNum
    icon
  }
}
`;
