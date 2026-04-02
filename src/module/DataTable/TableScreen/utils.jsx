import { DateTime } from 'asab_webui_components';

export const getColumns = (t) => [
  {
    title: t('Training|Username'),
    thStyle: { minWidth: '6rem' },
    render: ({ row }) => (
      <span className="id-tooltip-wrapper">
        {row.username}
        <span className="id-tooltip">{row.id}</span>
      </span>
    ),
  },
  {
    title: t('Training|Email'),
    thStyle: { minWidth: '8rem' },
    render: ({ row }) => row.email,
  },
  {
    title: t('Training|Address'),
    thStyle: { minWidth: '10rem' },
    render: ({ row }) => row.address,
  },
  {
    title: t('Training|Created'),
    thStyle: { minWidth: '6rem' },
    render: ({ row }) => <DateTime value={row.created} />,
  },
  {
    title: t('Training|Last Sign In'),
    thStyle: { minWidth: '6rem' },
    render: ({ row }) => <DateTime value={row.last_sign_in} />,
  },
];
