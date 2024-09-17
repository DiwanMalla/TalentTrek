/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";

interface Internship {
  job_description: any;
  job_highlights: any;
  id: string;
  job_title: string;
  employer_name: string;
  job_city: string;
  job_offer_expiration_datetime_utc: string;
  employer_logo?: string;
  job_id: string;
}
const useFetch = (
  endpoint: string,
  query: { query?: string; num_pages?: number; page?: number; job_id?: string }
) => {
  const [data, setData] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "9e6df29175msh1ae8fcf477d2633p1bf009jsn939fa5730f26",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error);

      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
