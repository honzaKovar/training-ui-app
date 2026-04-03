import { useTranslation } from 'react-i18next';

export const TablePagination = ({ page, limit, count, loading, onPageChange }) => {
  const { t } = useTranslation();

  const totalPages = Math.ceil(count / limit);
  const firstItem = 1 + (page - 1) * limit;
  const lastItem = Math.min(page * limit, count);

  return (
    <div className="card-footer card-footer-flex">
      <div className="border-end flex-fill">{`${firstItem} - ${lastItem} ${t('General|of')} ${count} ${t('General|item(s)')}`}</div>
      <div className="border-end">{`${t('General|Page')}: ${page} ${t('General|of')} ${totalPages} ${t('General|page(s)')}`}</div>
      <button className="btn btn-outline-secondary" disabled={page <= 1 || loading} onClick={() => onPageChange(page - 1)}>
        <i className="bi bi-chevron-double-left" />
      </button>
      <button className="btn btn-outline-secondary" disabled={page >= totalPages || loading} onClick={() => onPageChange(page + 1)}>
        <i className="bi bi-chevron-double-right" />
      </button>
    </div>
  );
};
