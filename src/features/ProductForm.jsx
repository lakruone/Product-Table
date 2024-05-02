import { Box, TextField, } from '@mui/material'
import React from 'react'
import SecondaryButton from '../shared/SecondaryButton'
import PrimaryButton from '../shared/PrimaryButton'
import styled from 'styled-components'

const Input = styled(TextField)`
&& {
  margin-bottom: 20px;
}
`;

const ProductForm = ({handleSubmit, handleClose}) => {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Input
        name="name"
        required
        fullWidth
        id="name"
        label="Product Name"
        autoFocus
      />
      <Input
        required
        fullWidth
        id="price"
        label="Price (USD)"
        name="price"
      />
      <Input
        fullWidth
        id="description"
        label="Description"
        name="description"
      />
      <Box display={'flex'} gap={'5px'} width={'100%'}>
        <SecondaryButton sx={{ flex: '1' }} onClick={handleClose}>Close</SecondaryButton>
        <PrimaryButton  type="submit" sx={{ flex: '1' }} >Save</PrimaryButton>
      </Box>
    </Box>
  )
}

export default ProductForm