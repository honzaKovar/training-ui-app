import { DataTableCard2 } from 'asab_webui_components';
import { useTranslation } from 'react-i18next';

import { getColumns } from '../../utils';
import { useTableScreenCardApi } from './useTableScreenCardApi';
import { Header } from './Header.jsx';

export const TableScreenCard = ({ app }) => {
  const { t } = useTranslation();

  const { loader } = useTableScreenCardApi();

  return <DataTableCard2 app={app} columns={getColumns(t)} loader={loader} header={<Header />} />;
};
