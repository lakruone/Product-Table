import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, } from '@mui/material';
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { useDeleteProduct, useGetProductList } from '../hooks/ProductHooks';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomModal from '../shared/Modal';
import { ShowModalContext } from '../context/ShowModalContext';
import { ModalType } from '../constants';

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

const CustomTableRow = styled(TableRow)`
  &&:hover {
    background-color: #fbfbfb;
  }
`;

const ActionButton = styled(Button)`
  && {
    color: #a6a6a6;
    &&:hover {
      color: #fdc404;
      background-color: #fbfbfb;
    }
  }
`;

const ProductTable = () => {

  const { showModal, setShowModal, modalType, setModalType} = useContext(ShowModalContext);

  const [deleteProduct,setDeleteProduct ] = useState(null);
  const { data: products, isLoading} = useGetProductList();

  const { mutate, isPending } = useDeleteProduct();

  const onDeleteClick = (product) => {
    setDeleteProduct(product);
    setShowModal(true);
    setModalType(ModalType.DeleteProduct);
  }

  const handleDelete = () => {
    mutate(deleteProduct.id);
  }

  const handleCloseDeleteModal = () => {
    setDeleteProduct(null);
    setShowModal(false);
    setModalType(null);
  }

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
                <HeaderCell></HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <CustomTableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell style={{textAlign: 'right'}} onClick={() => console.log('lakruwan', product.id)}>
                    <ActionButton variant='text' > <EditIcon/></ActionButton>
                    <ActionButton variant='text' onClick={() => onDeleteClick(product)}> <DeleteForeverIcon/></ActionButton>
                  </TableCell>
                </CustomTableRow>
              ))}
            </TableBody>
          </Table>
          <CustomModal
            open={showModal && modalType === ModalType.DeleteProduct}
            title= {`Delete ${deleteProduct?.name}`}
            description='Are you sure you want to delete ?'
            primaryButtonLabel='Yes'
            primaryButtonOnClick={handleDelete}
            secondaryButtonLabel='Cancel'
            secondaryButtonOnClick={handleCloseDeleteModal}
            disabled={isPending}
          />
        </TableWrapper>
      }
    </>
  )
}

export default ProductTable;