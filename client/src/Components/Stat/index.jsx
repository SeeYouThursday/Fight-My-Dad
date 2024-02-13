import * as React from "react";
import { styled } from "@mui/material/styles";
import { grey, red, yellow } from "@mui/material/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../../assets/images/pexels-pixabay-163403.jpg";
import { useQuery } from "@apollo/client";
import { QUERY_DADS } from "../../utils/queries";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: red[700],
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: grey[700],
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: yellow[700],
  },
  "&:nth-of-type(even)": {
    backgroundColor: yellow[600],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, joke, win, loss) {
  return { name, joke, win, loss };
}

export default function Stat() {
  // added useQuery to get data from the server to display
  const { data: allData } = useQuery(QUERY_DADS, {variables: {dadName: "dadName", dadJoke: "dadJoke", winNum: "winNum", lossNum: "lossNum"}});
  console.log("allData", allData);
  const rows = [
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[0], allData && allData.getAllDads.map((dad) => dad.dadJoke)[0], allData && allData.getAllDads.map((dad) => dad.winNum)[0], allData && allData.getAllDads.map((dad) => dad.lossNum)[0]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[1], allData && allData.getAllDads.map((dad) => dad.dadJoke)[1], allData && allData.getAllDads.map((dad) => dad.winNum)[1], allData && allData.getAllDads.map((dad) => dad.lossNum)[1]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[2], allData && allData.getAllDads.map((dad) => dad.dadJoke)[2], allData && allData.getAllDads.map((dad) => dad.winNum)[2], allData && allData.getAllDads.map((dad) => dad.lossNum)[2]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[3], allData && allData.getAllDads.map((dad) => dad.dadJoke)[3], allData && allData.getAllDads.map((dad) => dad.winNum)[3], allData && allData.getAllDads.map((dad) => dad.lossNum)[3]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[4], allData && allData.getAllDads.map((dad) => dad.dadJoke)[4], allData && allData.getAllDads.map((dad) => dad.winNum)[4], allData && allData.getAllDads.map((dad) => dad.lossNum)[4]),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Avatar</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Dad Joke</StyledTableCell>
            <StyledTableCell align="right">Wins</StyledTableCell>
            <StyledTableCell align="right">Losses</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>
                <StyledTableRow></StyledTableRow>
                <Avatar
                  alt="John Doe"
                  src={avatarImg}
                  // sx={{ bgcolor: cyan[500] }}
                />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name} 
              </StyledTableCell>
              <StyledTableCell>{row.joke}</StyledTableCell>
              <StyledTableCell align="right">{row.win}</StyledTableCell>
              <StyledTableCell align="right">{row.loss}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export function DashStat() {
  // added useQuery to get data from the server to display
  const { data: allData } = useQuery(QUERY_DADS, {variables: {dadName: "dadName", dadJoke: "dadJoke", winNum: "winNum", lossNum: "lossNum"}});
  console.log("allData", allData);
  const rows = [
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[0], allData && allData.getAllDads.map((dad) => dad.dadJoke)[0], allData && allData.getAllDads.map((dad) => dad.winNum)[0], allData && allData.getAllDads.map((dad) => dad.lossNum)[0]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[1], allData && allData.getAllDads.map((dad) => dad.dadJoke)[1], allData && allData.getAllDads.map((dad) => dad.winNum)[1], allData && allData.getAllDads.map((dad) => dad.lossNum)[1]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[2], allData && allData.getAllDads.map((dad) => dad.dadJoke)[2], allData && allData.getAllDads.map((dad) => dad.winNum)[2], allData && allData.getAllDads.map((dad) => dad.lossNum)[2]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[3], allData && allData.getAllDads.map((dad) => dad.dadJoke)[3], allData && allData.getAllDads.map((dad) => dad.winNum)[3], allData && allData.getAllDads.map((dad) => dad.lossNum)[3]),
    createData(allData && allData.getAllDads.map((dad) => dad.dadName)[4], allData && allData.getAllDads.map((dad) => dad.dadJoke)[4], allData && allData.getAllDads.map((dad) => dad.winNum)[4], allData && allData.getAllDads.map((dad) => dad.lossNum)[4]),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Avatar</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Dad Joke</StyledTableCell>
            <StyledTableCell align="right">Wins</StyledTableCell>
            <StyledTableCell align="right">Losses</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>
                <StyledTableRow></StyledTableRow>
                <Avatar
                  alt="John Doe"
                  src={avatarImg}
                  // sx={{ bgcolor: cyan[500] }}
                />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name} 
              </StyledTableCell>
              <StyledTableCell>{row.joke}</StyledTableCell>
              <StyledTableCell align="right">{row.win}</StyledTableCell>
              <StyledTableCell align="right">{row.loss}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}