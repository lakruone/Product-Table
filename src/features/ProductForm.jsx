import { Box, TextField, } from '@mui/material'
import React, { useState } from 'react'
import SecondaryButton from '../shared/SecondaryButton'
import PrimaryButton from '../shared/PrimaryButton'
import styled from 'styled-components'

const Input = styled(TextField)`
&& {
  margin-bottom: 20px;
}
`;

const ProductForm = ({handleSubmit, handleClose, initialValues, isPending}) => {

  const { id ,name: initialName = '', price: initialPrice = '', description: initialDescription = '' } =
    initialValues || {};

  const [name, setName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');


  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    setNameError(value ? '' : 'Name is required');
  };

  const handlePriceChange = (event) => {
    const { value } = event.target;
    setPrice(value);
    if (!value) {
      setPriceError('Price is required');
    } else {
      setPriceError(/^\d+$/.test(value) ? '' : 'Price must be a number');
    }

  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmitForm = (event) => {
    let isError = false;
    event.preventDefault();
    if (!name) {
      setNameError('Name is required');
      isError = true;
    }
    if (!price) {
      setPriceError('Price is required');
      isError = true;
    } else if (!price || !/^\d+$/.test(price)) {
      setPriceError('Price must be a number');
      isError = true;
    }
    if (isError) return; 

    handleSubmit({ id, name, price, description });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmitForm} sx={{ mt: 3 }}>
      <Input
        name="name"
        required
        fullWidth
        id="name"
        label="Product Name"
        autoFocus
        value={name}
        onChange={handleNameChange}
        error={!!nameError}
        helperText={nameError}
      />
      <Input
        required
        fullWidth
        id="price"
        label="Price (USD)"
        name="price"
        value={price}
        onChange={handlePriceChange}
        error={!!priceError}
        helperText={priceError}
      />
      <Input
        fullWidth
        id="description"
        label="Description"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <Box display={'flex'} gap={'5px'} width={'100%'}>
        <SecondaryButton sx={{ flex: '1' }} onClick={handleClose}>Cancel</SecondaryButton>
        <PrimaryButton  type="submit" sx={{ flex: '1' }} disabled={isPending}>Save</PrimaryButton>
      </Box>
    </Box>
  )
}

export default ProductForm