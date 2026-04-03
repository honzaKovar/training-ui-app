import { useState } from 'react';

import './TableScreen.scss';
import { TableScreenBasic, TableScreenCard } from './components/index.js';

/**
 * TableScreen renders two implementations of the data table to address an ambiguity in the task spec.
 * The spec mentions DataTable2 with pagination, however DataTable2 is a purely presentational component
 * with no pagination built in. Pagination is handled by DataTableCard2 which wraps DataTable2 internally.
 *
 * - TableScreenCard: uses DataTableCard2 for out-of-the-box pagination via DataTableContext
 * - TableScreenBasic: uses DataTable2 directly with manual client-side pagination
 */
export const TableScreen = () => {
  const [shouldUseCardComponent, setShouldUseCardComponent] = useState(false);

  return (
    <div className="d-flex flex-column gap-3 p-3">
      <div>
        <button className="btn btn-outline-primary" onClick={() => setShouldUseCardComponent((prev) => !prev)}>
          <i className={`bi ${shouldUseCardComponent ? 'bi-table' : 'bi-layout-text-window'} me-2`} />
          {shouldUseCardComponent ? 'Use DataTable2' : 'Use DataTableCard2'}
        </button>
      </div>

      {shouldUseCardComponent ? <TableScreenCard /> : <TableScreenBasic />}
    </div>
  );
};
