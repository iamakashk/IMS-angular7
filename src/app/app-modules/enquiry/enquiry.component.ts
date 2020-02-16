import { EnquiryService } from "./enquiry.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Masters } from "src/environments/environment";
import { ItemService } from "src/app/shared/service/item.service";

import {
  FormBuilder,
  Validator,
  Validators,
  FormArray,
  FormGroup
} from "@angular/forms";
import { Enquiry } from "src/app/model/enquiry/Enquiry.model";
import { EnquiryDetails } from "src/app/model/enquiry/EnquiryDetails.model";
@Component({
  selector: "app-enquiry",
  templateUrl: "./enquiry.component.html",
  styleUrls: ["./enquiry.component.css"]
})
export class EnquiryComponent implements OnInit {
  displayedColumns = [
    "enquiryId",
    "custName",
    "custEmail",
    "contactPerson",
    "tel1",
    "action"
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource: any;
  _allEnquiries: any;
  _allSources: any;
  _allAreaLocations: any;
  _allItems: any;
  _enquiryForm: FormGroup;
  _enquiryMaster: Enquiry;
  _enquiryDetails: EnquiryDetails[];
  _items: FormArray;
  _isModifiedClicked: boolean = false;
  _isAddEnquiryClicked: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private _itemService: ItemService,
    private _enquiryService: EnquiryService
  ) {
    this._enquiryMaster = new Enquiry();
    this._enquiryDetails = [];
    let enquiryDetails = new EnquiryDetails();
    if (enquiryDetails.deletedFlag != "Y") {
      enquiryDetails.deletedFlag = "N";
    }
    this._enquiryDetails.push(enquiryDetails);

    this._enquiryForm = this._formBuilder.group({
      custName: ["", Validators.required],
      custEmail: ["", Validators.required],
      area: [, Validators.required],
      source: [, Validators.required],
      remarks: ["", Validators.required],
      tel1: ["", Validators.required],
      tel2: ["", Validators.required],
      contactPerson: ["", Validators.required],
      enquiryDetailTsCreated: ["", Validators.required]
    });

    this._items = this._formBuilder.array([]);
    this._items.push(this.createItemFormGroup());
    this._enquiryForm.addControl("itemRows", this._items);
  }

  ngOnInit() {
    // this._dataSource = new MatTableDataSource<any>([]);
    // this._dataSource.paginator = this.paginator;
    this._getSources("GET");
    this._getAreaLocations();

    this._itemService._getAllItems().subscribe(apiResponse => {
      this._allItems = apiResponse.item;
      console.log(" ALL ITEMS ARE-> ", this._allItems);
    });

    this._enquiryService._getAllEnquiry().subscribe(apiResponse => {
      console.log("apiResponse.data : ", JSON.stringify(apiResponse.data));
      this._dataSource = new MatTableDataSource<Element>(apiResponse.data);
      this._dataSource.paginator = this.paginator;
      console.log(this._dataSource);
    });
  }

  createItemFormGroup(): FormGroup {
    return this._formBuilder.group({
      enquiryItemCode: null,
      itemPeriod: null,
      itemQty: null,
      itemRate: null,
      deletedFlag: "N"
    });
  }

  _addItemRow() {
    this._items.push(this.createItemFormGroup());
    let enquiryDetails = new EnquiryDetails();
    if (enquiryDetails.deletedFlag != "Y") {
      enquiryDetails.deletedFlag = "N";
    }

    this._enquiryDetails.push(enquiryDetails);
  }

  _removeItemRow(index: number) {
    this._enquiryDetails[index].deletedFlag = "Y";
    // this._items.removeAt(index);
    // this._enquiryDetails.splice(index, 1);
  }

  _getSources(actionType) {
    this.http
      .get<any>(`${Masters.source}/${actionType}`)
      .subscribe(resp => (this._allSources = resp.data));
  }
  _getAreaLocations() {
    this.http
      .get<any>(Masters.areaLocation)
      .subscribe(resp => (this._allAreaLocations = resp.data));
  }
  _addEnquiryClickHandler() {
    console.log("this._enquiryForm.valid(): ", this._enquiryForm.valid);

    console.log("this._enquiryForm.value: ", this._enquiryForm.value);
    this._enquiryMaster.enquiryDetails = this._enquiryDetails;

    console.log("this._enquiryMaster: ", JSON.stringify(this._enquiryMaster));
    this._enquiryService
      ._addEnquiry(this._enquiryMaster, "ADD")
      .subscribe(apiReponse => {
        let response: any;
        response = apiReponse;
        if (response.response.respCode === "0000") {
          alert(" Enquiry successfully added.");
          this._reloadTableData();
        }
      });
  }
  _resetFormClickHandler() {
    this._enquiryMaster = new Enquiry();
    this._enquiryDetails = [];
    this.clearFormArray(this._items);
  }

  _editEnquiry(element) {
    this._enquiryMaster = new Enquiry();
    this._enquiryDetails = [];
    this.clearFormArray(this._items);
    console.log(element);
    // for (let i = 0; i < this._allEnquiries.length; i++) {
    //   if (this._allEnquiries[i].enquiryId === element.enquiryId) {
    //     alert("matched.");
    //   }
    // }
    this._enquiryMaster = element;
    this._enquiryDetails = element.enquiryDetails;
    for (let i = 0; i < this._enquiryDetails.length - 1; i++) {
      this._items.push(this.createItemFormGroup());
    }

    console.log("this._enquiryDetails==========", this._enquiryDetails);
    this._enquiryMaster.enquiryDetails = this._enquiryDetails;
    this._isModifiedClicked = true;
    this._isAddEnquiryClicked = false;
  }

  _deleteEnquiry(element) {
    if (confirm("Are you sure to delete this enquiry?")) {
      this._enquiryMaster = element;
      this._enquiryMaster.deletedFlag = "Y";
      this._enquiryDetails = element.enquiryDetails;
      this._enquiryMaster.enquiryDetails = this._enquiryDetails;

      console.log("this._enquiryMaster: ", this._enquiryMaster);

      this._enquiryService
        ._addEnquiry(this._enquiryMaster, "DELETE")
        .subscribe(apiReponse => {
          let response: any;
          response = apiReponse;
          if (response.response.respCode === "0000") {
            alert(" Enquiry successfully deleted.");
            this._reloadTableData();
          }
        });
    }
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
    this._addItemRow();
  };

  _reloadTableData() {
    this._enquiryService._getAllEnquiry().subscribe(apiResponse => {
      console.log("apiResponse.data : ", JSON.stringify(apiResponse.data));
      this._dataSource = new MatTableDataSource<Element>(apiResponse.data);
      this._dataSource.paginator = this.paginator;
      console.log(this._dataSource);
    });
  }
}

export interface Element {
  enquiryId: number;
  custName: string;
  custEmail: string;
  contactPerson: string;
  tel1: string;
}
