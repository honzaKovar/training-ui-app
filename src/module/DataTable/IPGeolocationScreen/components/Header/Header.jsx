import { Autocomplete, TextField, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useDataApi } from '../../../../hooks/useDataApi.js';

import { headerContainerSx } from './styles.js';
import { formatUsername } from './utils.js';
import { UserDetails } from './UserDetails.jsx';

export const Header = ({ detailLoading, handleUserSelect, selectedUserDetail }) => {
  const { t } = useTranslation();

  const { rows: users, loading } = useDataApi();

  return (
    <Paper sx={headerContainerSx}>
      <Autocomplete
        sx={{ width: 300 }}
        loading={loading || detailLoading}
        options={users}
        getOptionLabel={({ username }) => formatUsername(username)}
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
        value={detailLoading ? t('Training|Loading') : (selectedUserDetail?.ip_address ?? '')}
        disabled
        sx={{ width: 200 }}
      />

      {selectedUserDetail && <UserDetails selectedUserDetail={selectedUserDetail} />}
    </Paper>
  );
};
