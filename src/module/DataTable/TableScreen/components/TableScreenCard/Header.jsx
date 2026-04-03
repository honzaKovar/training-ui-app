import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-fill">
      <h3>{t('Training|Users')}</h3>
    </div>
  );
};
