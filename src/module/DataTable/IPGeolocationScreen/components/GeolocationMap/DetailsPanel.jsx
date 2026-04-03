import { Box, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { getGeoDataFields } from './geoDataFields.js';
import { detailsPanelContainerSx, detailsPanelRowSx } from './styles.js';

export const DetailsPanel = ({ geoData }) => {
  const { t } = useTranslation();

  return (
    <Paper sx={detailsPanelContainerSx}>
      <Typography variant="h6">{t('Training|Location Details')}</Typography>
      {getGeoDataFields(t, geoData).map(({ label, value }) => (
        <Box key={label} sx={detailsPanelRowSx}>
          <Typography fontWeight="bold">{label}:</Typography>
          <Typography>{value}</Typography>
        </Box>
      ))}
    </Paper>
  );
};
