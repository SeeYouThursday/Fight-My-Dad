import * as React from 'react';
import { styled } from '@mui/material/styles';
import { blue, cyan, yellow } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: yellow[300],
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: blue[600],
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: blue[100],
  },
  '&:nth-of-type(even)': {
    backgroundColor: blue[200],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, joke, win, loss) {
  return { name, joke, win, loss };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Stat() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Dad Joke</StyledTableCell>
            {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell> */}
            <StyledTableCell align="right">Wins</StyledTableCell>
            <StyledTableCell align="right">Losses</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.joke}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
              <StyledTableCell align="right">{row.win}</StyledTableCell>
              <StyledTableCell align="right">{row.loss}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export default function Stat() {
//     return(
//         <div className='stat'>
//             {/* TO DO: CREATE STAT HERE */}
//         </div>
//     )
// }

