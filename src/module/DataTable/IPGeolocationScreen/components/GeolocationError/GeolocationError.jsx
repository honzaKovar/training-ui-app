import { Typography, Paper } from '@mui/material';

export const GeolocationError = ({ geoError }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography color="error">
        <i className="bi bi-exclamation-triangle me-2" />
        {String(geoError)}
      </Typography>
    </Paper>
  );
};
