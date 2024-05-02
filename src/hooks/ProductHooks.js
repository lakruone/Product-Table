import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct, getProductList } from "../services/ProductServices";
import { QueryKey, Toast } from "../constants";
import { useContext } from "react";
import { ShowModalContext } from "../context/ShowModalContext";
import { toast } from "react-toastify";

export function useGetProductList() {
    return useQuery({
      queryKey: [QueryKey.products],
      queryFn: async() => {
        const response = await getProductList();
        return response.data;
      }
    });
  }


export function useCreateProduct() {
  const queryClient = useQueryClient();
  const { setShowModal, setModalType } = useContext(ShowModalContext);

  return useMutation({
    mutationFn: (data) => createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.products] });
      setShowModal(false);
      setModalType(null);
      // toast('Product has been added successfully', { type: Toast.Success });
    },
    // onError: () => {
    //   toast('Something went wrong', { type: Toast.Error });
    // },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { setShowModal, setModalType }= useContext(ShowModalContext);
  return useMutation({
    mutationFn: (productId) => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.products] });
      setShowModal(false);
      setModalType(null);
      // toast('Client has been archived successfully', { type: Toast.Success });
    },
    // onError: () => {
    //   toast('Something went wrong', { type: Toast.Error });
    // },
  });
}