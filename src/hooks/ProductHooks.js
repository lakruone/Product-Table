import { useQuery } from "@tanstack/react-query";
import { getProductList } from "../services/ProductServices";
import { QueryKey } from "../constants";

export function useGetProductList() {
    return useQuery({
      queryKey: [QueryKey.products],
      queryFn: async() => {
        const response = await getProductList();
        return response.data;
      }
    });
  }