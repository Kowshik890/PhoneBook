import '../App.css';
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CONTACTS } from "../GraphQL/Queries";

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


  const styles = {
    containerTable: {
      width: '60%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    tableCellName: {
      paddingLeft: '20%'
    },
    tableCellPhone: {
      paddingLeft: '10%'
    }
  }

// to render all the contacts  
function GetContacts() {
  const { data } = useQuery(LOAD_CONTACTS);          // store all contacts in data
  const [contacts, setcontacts] = useState([]);      // initialising the contacts in a list
  const [searchTerm, setSearchTerm] = useState('');  // initialising the searched string

  // checking whether the data is received or not
  useEffect(() => {
    if (data) {
      setcontacts(data.getAllContacts);          // adding all contacts into contacts by setcontacts
    }
  }, [data]);  // wait for this data to be changed
  
  

 return (
    <div className="App">
      <h1>Phone Book App</h1>
      <Search>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => {setSearchTerm(event.target.value)}}      // adding the searched string into searchTerm by setSearchTerm
            />
      </Search>
      <Container style={styles.containerTable}>
        <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell style={styles.tableCellName}><h3>Name</h3></TableCell>
                <TableCell style={styles.tableCellPhone}><h3>Phone</h3></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {contacts.filter((val) => {           // include or exclude contact based on condition
                if(searchTerm === "") {
                    return val;                   // return all (one by one) through loop
                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {  // matching contact name with the searched string
                    return val;                   // return the current value      
                }
            }).map((val) => (                     // map through every contact
                <TableRow>
                <TableCell style={styles.tableCellName}>{val.name}</TableCell>
                <TableCell style={styles.tableCellPhone}>{val.phone}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default GetContacts;
