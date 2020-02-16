import { AreaLocationService } from "./area-location.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "src/app/model/Customer.model";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-area-master",
  templateUrl: "./area-master.component.html",
  styleUrls: ["./area-master.component.css"]
})
export class AreaMasterComponent implements OnInit {
  displayedColumns = ["id", "name"];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource: any;
  _customerData: Customer[];

  constructor(
    private http: HttpClient,
    private _areaLocationService: AreaLocationService
  ) {}

  ngOnInit() {
    this._areaLocationService._getAreaLocations().subscribe(apiResponse => {
      let areaLocations: any;
      this._dataSource = new MatTableDataSource<Element>(apiResponse.data);
      this._dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {}
}

export interface Element {
  id: number;
  name: string;
}
