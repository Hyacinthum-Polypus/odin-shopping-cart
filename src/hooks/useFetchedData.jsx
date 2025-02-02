import { useState, useEffect } from 'react'

const useFetchedData = (API_URL) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const abortController = new AbortController();
  
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL, {
            signal: abortController.signal,
          });
  
          const json = await response.json();
          setData(json);
          setError(null);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
  
      return () => {
        abortController.abort();
      };
    }, [API_URL]);
  
    return { data, error, loading };
};

export default useFetchedData;