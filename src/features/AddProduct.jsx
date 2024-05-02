import React, { useContext } from 'react'
import CustomModal from '../shared/Modal';
import ProductForm from './ProductForm';
import { shortUUID } from '../utils/shortUUID';
import { useCreateProduct } from '../hooks/ProductHooks';
import { ShowModalContext } from '../context/ShowModalContext';
import { ModalType } from '../constants';

const AddProduct = () => {
  const { showModal, setShowModal, modalType, setModalType} = useContext(ShowModalContext);

  const uuid = shortUUID();

  const { mutate, isPending } = useCreateProduct();

  const handleClose = () => {
    setShowModal(false);
    setModalType(null);
  }

  const handleSave = async(values) => {
    mutate({...values, price: Number(values.price)});
  }
  return (
    <CustomModal
      open={showModal && modalType === ModalType.AddProduct}
      title='New Product'
      handleClose={handleClose}
    >
      <ProductForm handleSubmit={handleSave} handleClose={handleClose} initialValues={{id: uuid}} isPending={isPending}/>
    </CustomModal>
  )
}

export default AddProduct