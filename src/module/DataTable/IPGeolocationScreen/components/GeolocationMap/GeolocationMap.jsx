import { Box, Paper } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { TILE_LAYER_URL, TILE_LAYER_ATTRIBUTION } from './leafletConfig.js';
import { DetailsPanel } from './DetailsPanel.jsx';

export const GeolocationMap = ({ geoData }) => {
  const { city, country, latitude, longitude } = geoData;

  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Paper sx={{ p: 2, flex: 1 }}>
        <MapContainer center={[latitude, longitude]} zoom={10} style={{ height: '60vh', width: '100%' }}>
          <TileLayer url={TILE_LAYER_URL} attribution={TILE_LAYER_ATTRIBUTION} />
          <Marker position={[latitude, longitude]}>
            <Popup>
              {city}, {country}
            </Popup>
          </Marker>
        </MapContainer>
      </Paper>

      <DetailsPanel geoData={geoData} />
    </Box>
  );
};
