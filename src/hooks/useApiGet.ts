import { useState, useEffect } from "react";

export type TApiResponse = {
  data: any;
  error: Boolean;
  loading: Boolean;
};

export const useApiGet = (url: string): TApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setError(false);
    setLoading(true);

    try {
      const apiResponse = await fetch(url);
      const text = await apiResponse.text();

      // This is a bug in the JSON response that caused an error when parsing
      const formattedText = text.replaceAll("Infinity", '"Infinity"');
      const json = JSON.parse(formattedText);

      setData(json);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  });

  return { data, error, loading };
};
