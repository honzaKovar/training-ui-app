import { Module } from 'asab_webui_components';

import { TableScreen } from './TableScreen/TableScreen.jsx';
import { DetailScreen } from './DetailScreen/DetailScreen.jsx';
import { IPGeolocationScreen } from './IPGeolocationScreen/index.js';

export default class TableApplicationModule extends Module {
  constructor(app, name) {
    super(app, 'TableApplicationModule');

    app.Router.addRoute({
      path: '/',
      end: false,
      name: 'Table',
      component: TableScreen,
    });

    app.Router.addRoute({
      path: '/detail/:id',
      end: false,
      name: 'Detail',
      component: DetailScreen,
    });

    app.Navigation.addItem({
      name: 'Table',
      icon: 'bi bi-table',
      url: '/',
    });

    app.Router.addRoute({
      path: '/ip-geolocation',
      end: false,
      name: 'IP Geolocation',
      component: IPGeolocationScreen,
    });

    app.Navigation.addItem({
      name: 'IP Geolocation',
      icon: 'bi bi-geo-alt',
      url: '/ip-geolocation',
    });
  }
}
