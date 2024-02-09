import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      dads {
        _id
      }
    }
  }
`;

// export const QUERY_DAD = gql`
// query getDad{}`;

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
  }
}`;

// query me {
//   me {
//     _id
//     username
//     dads {
//       _id

//     }
//   }
// }
// `;
