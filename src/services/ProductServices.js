import { apiCall } from "../api"

export const getProductList = () => {
  return apiCall({
    method: 'GET',
    url: '/products'
  })
}

export const createProduct = (data) => {
  return apiCall({
    method: 'POST',
    url: '/product',
    data: data
  })
}

export const deleteProduct = (id) => {
  return apiCall({
    method: 'DELETE',
    url: `/product?id=${id}`
  })
}

export const updateProduct = (data) => {
  return apiCall({
    method: 'PUT',
    url: '/product',
    data: data
  })
}