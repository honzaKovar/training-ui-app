import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { DETAIL_API_URL } from '../../../constants/apiUrls.js';

export const useDetailScreenApi = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDetailData = async (id) => {
    const { data } = await axios.get(`${DETAIL_API_URL}/${id}`);
    return data;
  };

  const handleGetDetailData = async (id) => {
    try {
      const data = await getDetailData(id);
      setDetailData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetDetailData(id);
  }, [id]);

  return { detailData, loading, error };
};
