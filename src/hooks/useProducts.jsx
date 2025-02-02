import useFetchedData from "./useFetchedData";

export default function useProducts(category) {
    let apiCall;
    if(category !== 'none') {
        apiCall =  `https://fakestoreapi.com/products/category/${category}`
    } else {
        apiCall = "https://fakestoreapi.com/products"
    }

    const {data, error, loading} = useFetchedData(apiCall);
    if(loading) return [];
    if(error) {
        console.error(error);
        return [];
    }
    return data;
}