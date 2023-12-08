//useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading("loading...");
    setData(null);
    setError(null);
    try {
      await axios.get(url).then((response) => {
        setLoading(false);
        if (response.status === 200) {
          response.data && setData(response.data);
        }
      });
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Awkward..");
    }
  };

  useEffect(() => {
    fetchData();
    // const source = axios.CancelToken.source();
    // axios
    //   .get(url, { cancelToken: source.token })
    //   .then((res) => {
    //     setLoading(false);
    //     //checking for multiple responses for more flexibility
    //     //with the url we send in.
    //     res.data.content && setData(res.data.content);
    //     res.content && setData(res.content);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setError("An error occurred. Awkward..");
    //   });
    // return () => {
    //   source.cancel();
    // };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
