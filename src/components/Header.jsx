import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddProduct from '../features/AddProduct';
import PrimaryButton from '../shared/PrimaryButton';
import { ShowModalContext } from '../context/ShowModalContext';
import { ModalType } from '../constants';

const Heading = styled(Typography)`
  && {
    font-weight: bold;
    text-align: left;
    border-bottom: solid 1.5px #e0e0eb;
    padding-bottom: 20px
  }
`;

const Header = () => {
  const { setShowModal, setModalType} = useContext(ShowModalContext);

  const handleNewProductClick = () => {
    setShowModal(true);
    setModalType(ModalType.AddProduct);
  }

  return (
    <>
        <Heading variant="h4" >Products</Heading>
        <PrimaryButton onClick={handleNewProductClick}><AddRoundedIcon fontSize='small' sx={{paddingRight: '5px'}}/>New Product</PrimaryButton>
        <AddProduct />
    </>
  )
}

export default Header;