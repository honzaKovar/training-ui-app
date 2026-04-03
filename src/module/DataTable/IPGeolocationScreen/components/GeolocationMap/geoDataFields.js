export const getGeoDataFields = (t, { city, country, latitude, longitude, org, timezone, region }) => [
  { label: t('Training|City'), value: city },
  { label: t('Training|Region'), value: region },
  { label: t('Training|Country'), value: country },
  { label: t('Training|Organisation'), value: org },
  { label: t('Training|Timezone'), value: timezone },
  { label: t('Training|Latitude'), value: latitude },
  { label: t('Training|Longitude'), value: longitude },
];
