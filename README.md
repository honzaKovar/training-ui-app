# TeskaLabs Training UI App

Frontend training app built on top of TeskaLabs training scaffold — features a paginated data table, detail view, and an IP geolocation screen with interactive map powered by Leaflet and MUI.

## Live Demo

[https://honzakovar.github.io/training-ui-app/](https://honzakovar.github.io/training-ui-app/)

## My Implementation

### Technical decisions

- Implemented both `DataTable2` and `DataTableCard2` approaches for the table screen — the task spec mentions `DataTable2` with pagination, however from reading the source `DataTable2` is a purely presentational component with no pagination built in. Pagination is handled by `DataTableCard2` which wraps it internally. A toggle allows switching between both implementations.
- For the `DataTable2` implementation, built a custom `TablePagination` component with client-side pagination.
- Used `axios` for data fetching with custom hooks per screen to separate concerns
- Added `eslint` and `prettier` for code quality
- Translations for both English and Czech

### Custom screen — IP Geolocation

Built with MUI and Leaflet. Select a user from the autocomplete, the app fetches their detail and automatically looks up the IP geolocation via [ipinfo.io](https://ipinfo.io), displaying the result on an interactive map.

> **Note:** Some users in the dataset have private or reserved IP addresses (e.g. `192.168.x.x`) which cannot be geolocated. An error message is displayed in these cases.

### Stack additions
- `@mui/material` — UI components for the custom screen
- `leaflet` + `react-leaflet` — interactive map
- `eslint` + `prettier` — code quality

---

## Original Task

This is a training task for developers who like challenges :)

## Prerequisities

### API endpoints

`https://devtest.teskalabs.com/data`

`https://devtest.teskalabs.com/detail/<id>`

### TeskaLabs WebUI libraries

[ASAB WebUI Shell Library](https://github.com/TeskaLabs/asab-webui-shell-lib)

[ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib)

### pnpm

Useful commands:

```
pnpm install
pnpm start
pnpm build
```

## The task

This task has 3 parts to be extended/implemented - Table, Detail and your custom screens. The requirement is to extend the Table screen, create a Detail screen for Table screen and build your own custom screen. A plus points are for building & deploying the application that we can examine its functionality.

### Table screen

- Extend a Table screen.
- Use this API for obtaining the data: `https://devtest.teskalabs.com/data`
- Create a screen with a table using components from [ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib). Hint: use `DataTable2` (explore the code, it will help you to understand the usage).
- The table have to display all the `/data` content with one exception - `id` should be displayed on hover over `username`.
- The table by default use params, therefore there should be a pagination (you need to ensure a proper request to the `/data` endpoint, `DataTable2` has pagination by default).
- For timestamp values use apropriate components from [ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib)
- Add navigation to Detail screen by the `id`.

### Detail screen

- Create a Detail screen.
- Use this API for obtaining the detail data: `https://devtest.teskalabs.com/detail/<id>`
- Create a screen with a card(s) which display all the information retrieved from the `/detail/<id>` endpoint.
- You can render the data in 1 or several cards based on your choice.
- You can use components from [ASAB WebUI Components Library](https://github.com/TeskaLabs/asab-webui-components-lib).

### Your own screen

- Create your own screen.
- The screen should use any free API data source (or you can connect it to your backend, if you dare to).
- Use components of your choice and design the screen as you wish (you can install any library/framework which you are used to use).

### Plus points

- Add translations to the Table header and Detail card.
- Use bootstrap icons for Table header and Detail card.
- Implement navigation back from Detail screen to Table screen.
- Build & deploy the application (provide the functional link).
