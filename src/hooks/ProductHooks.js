import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getProductList } from "../services/ProductServices";
import { QueryKey, Toast } from "../constants";
import { useContext } from "react";
import { ShowProductModalContext } from "../context/ShowProductModalContext";
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
  const { setShowModal } = useContext(ShowProductModalContext);

  return useMutation({
    mutationFn: (data) => createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.products] });
      setShowModal(false);
      toast('Product has been added successfully', { type: Toast.Success });
    },
    // onError: () => {
    //   toast('Something went wrong', { type: Toast.Error });
    // },
  });
}