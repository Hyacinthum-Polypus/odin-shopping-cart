import useFetchedData from "./useFetchedData";

export default function useProducts() {
    const {data, error, loading} = useFetchedData();
    if(loading) return [];
    if(error) return error;
    console.log(data);
    return data;
}