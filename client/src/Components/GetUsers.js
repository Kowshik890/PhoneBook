import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/system";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      backgroundColor: '#F0F8FF',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function GetUsers() {
  const { data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  
  

 return (
    <div className="App">
      <h1>Phone Book App</h1>
      <Search>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => {setSearchTerm(event.target.value)}}
            />
      </Search>
      <Container style={{ width: '60%', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell style={{paddingLeft: '20%'}}><h3>Name</h3></TableCell>
                <TableCell style={{paddingLeft: '10%'}}><h3>Phone</h3></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.filter((val) => {
                if(searchTerm === "") {
                    return val;
                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val) => (
                <TableRow>
                <TableCell style={{paddingLeft: '20%'}}>{val.name}</TableCell>
                <TableCell style={{paddingLeft: '10%'}}>{val.phone}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default GetUsers;
