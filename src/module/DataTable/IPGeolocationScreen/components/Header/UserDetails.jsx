import { Stack, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { userDetailsWrapperSx } from './styles.js';

export const UserDetails = ({ selectedUserDetail }) => {
  const { t } = useTranslation();

  return (
    <Stack sx={userDetailsWrapperSx}>
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
    </Stack>
  );
};
