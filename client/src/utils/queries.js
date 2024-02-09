import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      dads {
        _id
        dadName
        nickname
        userId
        entryMusic
        dadJoke
        weight
        armLength
        weapon
        winNum
        lossNum
      }
    }
  }
`;

export const QUERY_DAD = gql`
query getDad{}`;

export const QUERY_DADS = gql`
query getAllDads{}`;
