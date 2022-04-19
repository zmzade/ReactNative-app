import React from "react";
const useApi = (apiFunc) => {
  const [data, setdata] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setdata(response.data);
  };
  return { data, error, loading, request };
};
export default useApi;
