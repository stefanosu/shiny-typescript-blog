import { useState, useEffect, useCallback } from "react";

interface RequestProps<T> {
  url: RequestInfo;
  init?: RequestInit;
  processData?: (data: any) => T;
  headers?:(data: any) => T;
}


const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Content-type": "application/json"
}

export const useFetch = <T>({ url, init, processData, headers }: RequestProps<T>) => {
  // Response state
  

  const [data, setData] = useState<T>();



  // Turn objects into strings for useCallback & useEffect dependencies
  const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

  // If no processing function is passed just cast the object to type T
  const processJson = useCallback(processData || ((jsonBody: any) => jsonBody as T), []);

  useEffect(() => {
    /// Define asynchronous function
    const fetchApi = async () => {
      try {
        // Fetch data from REST API
        const response = await fetch(url, init);

        if (response.status === 200) {
          // Extract json
          const rawData: any = await response.json();
          const processedData = processJson(rawData);
          setData(processedData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };

    // Call async function
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifiedUrl, stringifiedInit, processJson, headers]);

  return data;
};
