import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DETAIL_API_URL } from '../../../constants/apiUrls.js';

export const useIPGeolocationApi = () => {
  const { t } = useTranslation();

  const [selectedUserDetail, setSelectedUserDetail] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [geoError, setGeoError] = useState(null);

  const handleUserSelect = async (_, user) => {
    setSelectedUserDetail(null);
    setGeoData(null);
    setGeoError(null);

    if (!user) return;

    setDetailLoading(true);

    try {
      const { data } = await axios.get(`${DETAIL_API_URL}/${user.id}`);
      setSelectedUserDetail(data);

      const { data: geoData } = await axios.get(`/api/geo/${data.ip_address}`);

      if (geoData.latitude === null || geoData.longitude === null) {
        setGeoError(`${t('Training|Unable to locate IP')} ${data.ip_address}`);
        return;
      }

      if (geoData.error) {
        setGeoError(geoData.reason);
        return;
      }

      setGeoData(geoData);
    } catch (error) {
      setGeoError(error);
    } finally {
      setDetailLoading(false);
    }
  };

  return { selectedUserDetail, geoData, detailLoading, geoError, handleUserSelect };
};
