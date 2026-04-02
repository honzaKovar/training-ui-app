import axios from 'axios';

import { DATA_TABLE_API_URL } from '../../../constants/apiUrls.js';

export const useTableScreenCardApi = () => {
  const loader = async ({ params }) => {
    const { data } = await axios.get(DATA_TABLE_API_URL, { params });

    return { rows: data.data, count: data.count };
  };

  return { loader };
};
