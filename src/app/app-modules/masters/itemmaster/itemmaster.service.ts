import { environment } from "./../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemmasterService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get("http://localhost:8084/items");
  }
  getSingleItem() {}
  deleteSingleItem(item) {
    return this.http.delete(environment.ITEMS_DELETE_SINGLE, item);
  }
  updateItem() {}
  getPaginationItem() {}
}
