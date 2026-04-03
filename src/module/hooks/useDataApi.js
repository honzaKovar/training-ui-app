import axios from 'axios';
import { useState, useEffect } from 'react';

import { DATA_TABLE_API_URL } from '../../constants/apiUrls.js';

export const useDataApi = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const handleGetData = async () => {
    try {
      const { data } = await axios.get(DATA_TABLE_API_URL);
      setRows(data.data);
      setCount(data.count);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return { rows, loading, error, count };
};
