import React from 'react'
import CustomModal from '../shared/Modal';
import ProductForm from './ProductForm';

const AddProduct = ({open, handleClose}) => {

  const handleSave = () => {
    console.log('save data');
  }
  return (
    <CustomModal
      open={open}
      title='New Product'
      handleClose={handleClose}
    >
      <ProductForm handleSubmit={handleSave} handleClose={handleClose}/>
    </CustomModal>
  )
}

export default AddProduct