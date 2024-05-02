import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddProduct from '../features/AddProduct';
import PrimaryButton from '../shared/PrimaryButton';
import { ShowProductModalContext } from '../context/ShowProductModalContext';

const AddButton = styled(Button)`
  && {
    float: right;
    background: #fdc404;
    border-radius: 20px;
    color: black;
    width: 160px;
    height: 45px;
    margin: 20px 0;
    text-transform: none;
    &:hover {
      background: #ffea00;
    }
  }
`;

const Heading = styled(Typography)`
  && {
    font-weight: bold;
    text-align: left;
    border-bottom: solid 1.5px #e0e0eb;
    padding-bottom: 20px
  }
`;

const Header = () => {
  const { setShowModal} = useContext(ShowProductModalContext);

  return (
    <>
        <Heading variant="h4" >Products</Heading>
        <PrimaryButton onClick={() => setShowModal(true)}><AddRoundedIcon fontSize='small' sx={{paddingRight: '5px'}}/>New Product</PrimaryButton>
        <AddProduct />
    </>
  )
}

export default Header;