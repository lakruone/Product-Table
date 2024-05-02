import { apiCall } from "../api"

export const getProductList = () => {
    return apiCall({
        method: 'GET',
        url: '/products'
    })
}