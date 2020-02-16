import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Masters } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AreaLocationService {
  constructor(private http: HttpClient) {}

  _getAreaLocations() {
    return this.http.get<any>(Masters.areaLocation);
  }
  _addAreaLocation() {
    // return this.http.post(Masters.areaLocation);
  }
}
