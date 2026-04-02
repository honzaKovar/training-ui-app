import axios from 'axios';
import { useEffect, useState } from 'react';

import { DATA_TABLE_API_URL } from '../../../constants/apiUrls.js';

const limit = 20;

export const useTableScreenBasicApi = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const getTableScreenData = async () => {
    const { data } = await axios.get(DATA_TABLE_API_URL);

    return data;
  };

  const handleGetTableScreenData = async () => {
    try {
      const data = await getTableScreenData();

      setRows(data.data);
      setCount(data.count);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetTableScreenData();
  }, []);

  const paginatedRows = rows.slice((page - 1) * limit, page * limit);

  return { loading, paginatedRows, error, count, page, limit, setPage };
};
