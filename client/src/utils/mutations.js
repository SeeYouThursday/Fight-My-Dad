import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String, $password: String!) {
    login(username: $username, password: $password) {
        token
        user {
            _id
            username
            firstName
            lastName
            savedDads
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String, $firstName: String, $lastName: String, $password: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, password: $password) {
        token
        user {
            _id
            username
            firstName
            lastName
        }
    }
}`;

export const SAVE_DAD = gql`

 mutation addDad($newDad: dadStats) {
    addDad(input: $newDad) {  
            armLength
            dadJoke
            dadName
            entryMusic
            experience
            nickname
            userId
            weight
            icon
        }
    }`;

export const REMOVE_DAD = gql`
mutation removeDad($dadId: ID!) {
    removeDad(dadId: $dadId) {
        _id
        dadName
    }
}`;

export const UPDATE_WIN = gql`
  mutation updateWinLossCounts($dadId: ID!, $isWin: Boolean!) {
    updateWinLossCounts(dadId: $dadId, isWin: $isWin) {
      _id
      winNum
      lossNum
    }
  }`;

// mutation addDad($dadName: String, $nickname: String, $userId: Int!, $entryMusic: String, $dadJoke: String, $weight: INT, $armLength: Int, $experience: Int, $winNum: Int, $lossNum: Int) {
//     addDad(dadName: $dadName, nickname: $nickname, userId: $userId, entryMusic: $entryMusic, dadJoke: $dadJoke, weight: $weight, armLength: $armLength, experience: $experience, winNum: $winNum, lossNum: $lossNum) {
//         userId
//         dadName
//         nickname
//         entryMusic
//         dadJoke
//         weight
//         armLength
//         experience
//         winNum
//         lossNum

//     }
// }`;
