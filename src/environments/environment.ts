// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //ITEM MASTER MAPPING

  ITEMS_GET_ALL: "http://localhost:8084/items",
  ITEMS_GET_SINGLE: "http://localhost:8084/items/",
  ITEMS_UPDATE_SINGLE_ITEM: "http://localhost:8084/items",
  ITEMS_DELETE_SINGLE: "http://localhost:8084/items/",
  ITEMS_CREATE_SINGLE: "http://localhost:8084/item",
  ITEMS_SINGLE_ITEM_PAGINATION: "http://localhost:8084/items/pagination"
};

const URL = "http://localhost:8084";

export const CustomerAPI = {
  getAll: `${URL}/customers`,
  GET_SINGLE_CUSTOMER: `${URL}/customer`
};
export const STATE_CITY_API = {
  GET_ALL_STATES_URL: `${URL}/states`,
  GET_ALL_CITIES_URL: `${URL}/cities`
};

export const Masters = {
  areaLocation: `${URL}/arealocation`,
  source: `${URL}/source`,
  customer: `${URL}/customers`
};

export const ItemMaster = {
  GET_ALL_ITEMS: `${URL}/items`
};

export const Enquiry = {
  ADD_ENQUIRY: `${URL}/enquiry/`,
  GET_ALL_ENQUIRY: `${URL}/enquiry/GET`,
  EDIT_ENQUIRY: `${URL}/enquiry/edit`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
