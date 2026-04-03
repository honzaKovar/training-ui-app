import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useIPGeolocationApi } from './useIPGeolocationApi.js';
import { containerSx } from './styles.js';

import { GeolocationError, GeolocationMap, Header } from './components/index.js';

export const IPGeolocationScreen = () => {
  const { t } = useTranslation();

  const { selectedUserDetail, geoData, detailLoading, geoError, handleUserSelect } = useIPGeolocationApi();

  return (
    <Stack sx={containerSx}>
      <Typography variant="h5">{t('Training|IP Geolocation')}</Typography>

      <Header detailLoading={detailLoading} handleUserSelect={handleUserSelect} selectedUserDetail={selectedUserDetail} />

      {geoError && <GeolocationError geoError={geoError} />}

      {geoData && geoData.latitude && geoData.longitude && <GeolocationMap geoData={geoData} />}
    </Stack>
  );
};
