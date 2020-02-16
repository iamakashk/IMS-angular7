import { Enquiry } from "./../../../environments/environment";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EnquiryService {
  constructor(private http: HttpClient) {}

  _addEnquiry(data, action) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${Enquiry.ADD_ENQUIRY}${action}`, data, {
      headers: headers
    });
  }

  _getAllEnquiry() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get<any>(Enquiry.GET_ALL_ENQUIRY, { headers: headers });
  }

  _editEnquiry(data) {}

  _deleteEnquiry(data) {}
}
