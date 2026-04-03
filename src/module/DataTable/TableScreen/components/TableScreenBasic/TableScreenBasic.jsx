import { useTranslation } from 'react-i18next';
import { DataTable2 } from 'asab_webui_components';

import { getColumns } from '../../utils';

import { useTableScreenBasicApi } from './useTableScreenBasicApi.js';
import { TablePagination } from './TablePagination.jsx';

export const TableScreenBasic = () => {
  const { t } = useTranslation();

  const { loading, paginatedRows, limit, page, count, setPage } = useTableScreenBasicApi();

  return (
    <div className="card">
      <div className="card-body datatable2-card-body">
        <DataTable2 columns={getColumns(t)} rows={paginatedRows} limit={limit} loading={loading} />
      </div>
      <TablePagination page={page} limit={limit} count={count} loading={loading} onPageChange={setPage} />
    </div>
  );
};
