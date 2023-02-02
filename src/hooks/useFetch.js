import { useEffect, useRef, useState } from "react";

export const useFetch = (url, otherOptions = {}) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const options = useRef(otherOptions).current;

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(
          url,
          options
            ? Object.assign(options, { signal: controller.signal })
            : { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
        setError(null);
        setIsPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);
  return { data, isPending, error };
};
