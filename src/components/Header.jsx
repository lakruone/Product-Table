import { Button, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

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
  return (
    <>
        <Heading variant="h4" >Products</Heading>
        <AddButton variant="contained" >Add Product</AddButton>
    </>
  )
}

export default Header