import { Component, OnInit, ViewChild } from "@angular/core";
import { SourceMasterService } from "./source-master.service";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Source } from "src/app/model/Source.model";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-source-master",
  templateUrl: "./source-master.component.html",
  styleUrls: ["./source-master.component.css"]
})
export class SourceMasterComponent implements OnInit {
  // variable start
  _sourceData: Source;
  _sourceForm: any;
  displayedColumns = ["id", "name", "action"];
  _isModifiedClicked = false;
  _isAddClicked = true;
  _selectedSourceID: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource: any;

  // variable end

  constructor(
    private _formBuilder: FormBuilder,
    private _sourceService: SourceMasterService
  ) {
    this._sourceData = new Source();
    this._sourceForm = this._formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      deleted: [""]
    });
  }

  ngOnInit() {
    this._reloadTableData();
  }

  _reloadTableData() {
    console.log(" inside this._reloadTableData() ");
    this._sourceService._getSources("GET").subscribe(apiResponse => {
      this._dataSource = new MatTableDataSource<Element>(apiResponse.data);
      this._dataSource.paginator = this.paginator;
    });
  }

  editSource(el: Source) {
    let element: any;
    element = el;

    console.log(el);
    // let sourceData = new Source();
    // sourceData = element;

    //this._sourceData = element;
    this._selectedSourceID = el.id;
    for (var key in el) {
      console.log("key= ", key);
      this._sourceForm.get(key).setValue(el[key]);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    this._isModifiedClicked = true;
    this._isAddClicked = false;
  }

  _deleteSource(data: Source) {
    // this._dataSource.forEach(element => {
    //   element.
    // });
    console.log("data", data);
    this._sourceService
      ._addModifySource(data, "DELETE")
      .subscribe(apiResponse => {
        console.log("done");
        this._reloadTableData();
      });
  }

  _addSourceClickHandler() {
    alert();
    if (this._sourceForm.valid) {
      this._sourceService
        ._addModifySource(this._sourceData, "ADD")
        .subscribe(apiResponse => {
          console.log(apiResponse);
          this._reloadTableData();
        });
      this._resetSourceClickHandler();
    } else {
      alert("Invalid");
    }
  }

  _modifySourceClickHandler() {
    this._sourceData.id = this._selectedSourceID;
    alert("_modifySourceClickHandler");
    if (this._sourceForm.valid) {
      this._sourceService
        ._addModifySource(this._sourceData, "UPDATE")
        .subscribe(apiResponse => {
          console.log(apiResponse);
          this._reloadTableData();
        });
      this._resetSourceClickHandler();
    } else {
      alert("Invalid");
    }
  }

  _resetSourceClickHandler() {
    this._isModifiedClicked = false;
    this._isAddClicked = true;
    this._sourceForm.reset();
  }
}

export interface Element {
  id: number;
  name: string;
}
