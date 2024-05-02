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