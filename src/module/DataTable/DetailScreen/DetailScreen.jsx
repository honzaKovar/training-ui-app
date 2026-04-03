/* eslint-disable no-undef */
import { ResultCard, Spinner } from 'asab_webui_components';
import { useTranslation } from 'react-i18next';

import { useDetailScreenApi } from './useDetailScreenApi';

export const DetailScreen = () => {
  const { t } = useTranslation();

  const { detailData, loading, error } = useDetailScreenApi();

  if (loading) return <Spinner />;

  if (error) return <ResultCard status="danger">{error}</ResultCard>;

  if (!detailData) return null;

  return (
    <div className="d-flex flex-column gap-3 p-3">
      <ResultCard>
        <button className="btn btn-outline-primary" onClick={() => window.history.back()}>
          <i className="bi bi-arrow-left me-2" />
          {t('Training|Back to Table')}
        </button>
        {Object.entries(detailData).map(([key, value]) => (
          <div key={key} className="d-flex gap-2 py-1 border-bottom">
            <strong>{t(`Training|${key}`)}:</strong>
            <span>{String(value)}</span>
          </div>
        ))}
      </ResultCard>
    </div>
  );
};
