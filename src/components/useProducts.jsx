import useFetchedData from "./useFetchedData";

export default function useProducts() {
    const {data, error, loading} = useFetchedData("https://fakestoreapi.com/products");
    if(loading) return [];
    if(error) return error;
    return data;
}