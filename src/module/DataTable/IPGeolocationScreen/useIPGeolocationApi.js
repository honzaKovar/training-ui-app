import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DETAIL_API_URL, GEO_API_URL, IPINFO_TOKEN } from '../../../constants/index.js';

export const useIPGeolocationApi = () => {
  const { t } = useTranslation();

  const [selectedUserDetail, setSelectedUserDetail] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [geoError, setGeoError] = useState(null);

  const getUserDetail = async (id) => {
    const { data } = await axios.get(`${DETAIL_API_URL}/${id}`);

    return data;
  };

  const getGeoData = async (ipAddress) => {
    const { data } = await axios.get(`${GEO_API_URL}/${ipAddress}?token=${IPINFO_TOKEN}`);

    return data;
  };

  const handleUserSelect = async (_, user) => {
    setSelectedUserDetail(null);
    setGeoData(null);
    setGeoError(null);

    if (!user) return;

    setDetailLoading(true);

    try {
      const detail = await getUserDetail(user.id);

      setSelectedUserDetail(detail);

      const geo = await getGeoData(detail.ip_address);

      if (geo.bogon || !geo.loc) {
        setGeoError(`${t('Training|Unable to locate IP')} ${detail.ip_address}`);
        return;
      }

      const [latitude, longitude] = geo.loc.split(',').map(Number);

      setGeoData({ ...geo, latitude, longitude });
    } catch (error) {
      setGeoError(error);
    } finally {
      setDetailLoading(false);
    }
  };

  return { selectedUserDetail, geoData, detailLoading, geoError, handleUserSelect };
};
