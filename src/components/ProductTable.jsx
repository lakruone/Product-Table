import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';

const TableWrapper = styled(TableContainer)`
  && {
    border-radius: 10px;
  }
`;

const ProductTable = () => {

  // TODO: pagination handle
  // const [page, setPage] = useState(0);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // }

  const rows = [
    { id: 1, name: 'John Doe', age: 35, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    { id: 3, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    { id: 4, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    { id: 5, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    { id: 6, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    { id: 7, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    { id: 8, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
    // Add more rows as needed
  ];
  return (
      <>
        <TableWrapper component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      {/* <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
      /> */}
    </>
  )
}

export default ProductTable;