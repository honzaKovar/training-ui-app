import { useState } from 'react';
import { useDataApi } from '../../../../hooks/useDataApi.js';

const limit = 20;

export const useTableScreenBasicApi = () => {
  const [page, setPage] = useState(1);
  const { rows, loading, error, count } = useDataApi();

  const paginatedRows = rows.slice((page - 1) * limit, page * limit);

  return { loading, paginatedRows, error, count, page, limit, setPage };
};
