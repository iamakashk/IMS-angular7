import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Masters } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SourceMasterService {
  constructor(private http: HttpClient) {}

  _getSources(actionType) {
    return this.http.get<any>(`${Masters.source}/${actionType}`);
  }

  // Fn to add / modify/ delete source
  _addModifySource(sourceData, actionType) {
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer validToke."
    });
    return this.http.post<any>(`${Masters.source}/${actionType}`, sourceData, {
      headers: httpHeaders
    });
  }
}
