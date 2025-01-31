import useFetchedData from "./useFetchedData";

export default function useProducts() {
    const {data, error, loading} = useFetchedData("https://fakestoreapi.com/products");
    if(loading) return [];
    if(error) {
        console.error(error);
        return [];
    }
    return data;
}