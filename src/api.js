import axios from "axios";
import { BASE_URL } from "./constants";

export const apiCall = axios.create({
    baseURL: BASE_URL,
});
