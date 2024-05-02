import React, { useContext } from 'react'
import CustomModal from '../shared/Modal';
import ProductForm from './ProductForm';
import { shortUUID } from '../utils/shortUUID';
import { useCreateProduct } from '../hooks/ProductHooks';
import { ShowProductModalContext } from '../context/ShowProductModalContext';

const AddProduct = () => {
  const { showModal, setShowModal} = useContext(ShowProductModalContext);

  const uuid = shortUUID();

  const { mutate, isPending } = useCreateProduct();

  const handleSave = async(values) => {
    console.log('save data', values);
    mutate({...values, price: Number(values.price)});
  }
  return (
    <CustomModal
      open={showModal}
      title='New Product'
      handleClose={() => setShowModal(false)}
    >
      <ProductForm handleSubmit={handleSave} handleClose={() => setShowModal(false)} initialValues={{id: uuid}} isPending={isPending}/>
    </CustomModal>
  )
}

export default AddProduct