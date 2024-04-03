import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const abortCont = new AbortController();


        fetch(endpoint, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok){
                    throw Error("Could Not Fetch Data");
                }
                return res.json();
            })
            .then (data => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log(err);
                    console.log('fetch aborted');
                } else{
                    setLoading(false);
                    setError(err.message);
                }
            });

        return () => abortCont.abort();
    }, [endpoint])

    return {data, loading, error};
}

export default useFetch;