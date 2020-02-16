import { Customer } from "./../../../model/Customer.model";
import {
  CustomerAPI,
  STATE_CITY_API,
  Masters
} from "./../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  /* global variables start */
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  /* global variables end */
  constructor(private http: HttpClient) {}

  customerOperation(action) {}
  _customerActions(model, actionType) {
    return this.http.post<any>(`${Masters.customer}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  getAllCustomer() {
    return this.http.get<Customer>(CustomerAPI.getAll);
  }

  GET_ALL_STATES_URL() {
    return this.http.get(STATE_CITY_API.GET_ALL_STATES_URL);
  }
  GET_ALL_CITIES_URL(stateId) {
    return this.http.get(`${STATE_CITY_API.GET_ALL_CITIES_URL}/${stateId}`);
  }
  _getSingleCustomer(customerId) {
    return this.http.get<Customer>(
      `${CustomerAPI.GET_SINGLE_CUSTOMER}/${customerId}`
    );
  }
  _getSources(actionType) {
    return this.http.get<any>(`${Masters.source}/${actionType}`);
  }
  _getAreaLocation() {
    return this.http.get<any>(`${Masters.areaLocation}`);
  }
}
