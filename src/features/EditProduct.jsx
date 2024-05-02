import React, { useContext } from 'react'
import CustomModal from '../shared/Modal'
import { ShowModalContext } from '../context/ShowModalContext';
import { ModalType } from '../constants';
import ProductForm from './ProductForm';
import { useUpdateProduct } from '../hooks/ProductHooks';

const EditProduct = ({product}) => {
  const { showModal, setShowModal, modalType, setModalType} = useContext(ShowModalContext);

  const { mutate, isPending} = useUpdateProduct();

  const handleClose = () => {
    setShowModal(false);
    setModalType(null);
  }

  const handleSave = async(values) => {
    mutate({...values, price: Number(values.price)});
  }

  return (
    <CustomModal
      open={showModal && modalType === ModalType.EditProduct}
      title='Edit Product'
      handleClose={handleClose}
    >
      <ProductForm handleSubmit={handleSave} handleClose={handleClose} initialValues={product} isPending={isPending}/>
    </CustomModal>
  )
}

export default EditProduct