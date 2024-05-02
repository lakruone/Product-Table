import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { useGetProductList } from '../hooks/ProductHooks';

const TableWrapper = styled(TableContainer)`
  && {
    border-radius: 10px;
  }
`;

const Spinner = styled(CircularProgress)`
  && {
    color: #fdc404;
    margin-top: 100px;
    margin-left: 100px;
  }
`;

const HeaderCell = styled(TableCell)`
  && {
    font-weight: bold;
  }
`;

const ProductTable = () => {

  const { data: products, isLoading} = useGetProductList();

  return (
      <>
      {isLoading || !products? 
        <Spinner size={80} /> : 
          <TableWrapper component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Price</HeaderCell>
                <HeaderCell>Description</HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      }
    </>
  )
}

export default ProductTable;