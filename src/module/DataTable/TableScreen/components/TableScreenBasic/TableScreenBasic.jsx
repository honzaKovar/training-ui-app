import { useTranslation } from 'react-i18next';
import { DataTable2 } from 'asab_webui_components';

import { getColumns } from '../../utils';

import { useTableScreenBasicApi } from './useTableScreenBasicApi';

export const TableScreenBasic = () => {
  const { t } = useTranslation();

  const { loading, paginatedRows, limit } = useTableScreenBasicApi();

  return <DataTable2 columns={getColumns(t)} rows={paginatedRows} limit={limit} loading={loading} />;
};
