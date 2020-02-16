import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemMaster } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private http: HttpClient) {}

  _getAllItems() {
    return this.http.get<any>(ItemMaster.GET_ALL_ITEMS);
  }
}
