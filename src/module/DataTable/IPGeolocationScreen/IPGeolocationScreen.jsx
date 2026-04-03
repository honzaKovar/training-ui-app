import { Autocomplete, TextField, Box, Typography, Paper } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

import { useDataApi } from '../../hooks/useDataApi.js';

import { useIPGeolocationApi } from './useIPGeolocationApi.js';
import { formatUsername } from './utils.js';
import { containerSx } from './styles.js';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export const IPGeolocationScreen = () => {
  const { t } = useTranslation();

  const { rows: users, loading } = useDataApi();

  const { selectedUserDetail, geoData, detailLoading, geoError, handleUserSelect } = useIPGeolocationApi();

  return (
    <Box sx={containerSx}>
      <Typography variant="h5">{t('Training|IP Geolocation')}</Typography>

      <Paper sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
        <Autocomplete
          sx={{ width: 300 }}
          loading={loading || detailLoading}
          options={users}
          getOptionLabel={(option) => formatUsername(option.username)}
          onChange={handleUserSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('Training|Select User')}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {detailLoading ? <i className="bi bi-hourglass" /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />
        <TextField
          label={t('Training|IP Address')}
          value={detailLoading ? 'Loading...' : (selectedUserDetail?.ip_address ?? '')}
          disabled
          sx={{ width: 200 }}
        />
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box>
            <Typography variant="caption">{t('Training|Username')}</Typography>
            <Typography>{selectedUserDetail?.username}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">{t('Training|Email')}</Typography>
            <Typography>{selectedUserDetail?.email}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">{t('Training|Address')}</Typography>
            <Typography>{selectedUserDetail?.address}</Typography>
          </Box>
        </Box>
      </Paper>

      {geoError && (
        <Paper sx={{ p: 2 }}>
          <Typography color="error">
            <i className="bi bi-exclamation-triangle me-2" />
            {String(geoError)}
          </Typography>
        </Paper>
      )}

      {geoData && geoData.latitude && geoData.longitude && (
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Paper sx={{ p: 2, flex: 1 }}>
            <MapContainer center={[geoData.latitude, geoData.longitude]} zoom={10} style={{ height: '60vh', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <Marker position={[geoData.latitude, geoData.longitude]}>
                <Popup>
                  {geoData.cityName}, {geoData.countryName}
                </Popup>
              </Marker>
            </MapContainer>
          </Paper>

          <Paper sx={{ p: 2, minWidth: 350 }}>
            <Typography variant="h6">{t('Training|Location Details')}</Typography>
            {[
              { label: t('Training|City'), value: geoData.city },
              { label: t('Training|Region'), value: geoData.region },
              { label: t('Training|Country'), value: geoData.country },
              { label: t('Training|Organisation'), value: geoData.org },
              { label: t('Training|Timezone'), value: geoData.timezone },
              { label: t('Training|Latitude'), value: geoData.latitude },
              { label: t('Training|Longitude'), value: geoData.longitude },
            ].map(({ label, value }) => (
              <Box key={label} sx={{ display: 'flex', gap: 1, py: 0.5, borderBottom: '1px solid', borderColor: 'divider' }}>
                <Typography fontWeight="bold">{label}:</Typography>
                <Typography>{value}</Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      )}
    </Box>
  );
};
