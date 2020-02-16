import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

import { HttpClient } from "@angular/common/http";
import { CustomerAddress } from "./../../../../model/CustomerAddress.model";
import { Customer } from "src/app/model/Customer.model";
import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-modify-customer",
  templateUrl: "./modify-customer.component.html",
  styleUrls: ["./modify-customer.component.css"]
})
export class ModifyCustomerComponent implements OnInit {
  /* GLOBAL VARIABLES START */
  // displayedColumns: string[] = ["csCustSupplrCode", "csName", "csCustOf"];
  _dataSource: any;
  _customerData: Customer[];
  _customerDetails: Customer;
  _billingAddress: CustomerAddress;
  _shippingAddress: CustomerAddress;
  _customerMasterForm: any;
  _addressArray: CustomerAddress[] = [];
  _allStates: any;
  _billCities: any;
  _shipCities: any;
  _allCustomers: Customer[];
  _selectedCustomerId: any = "0";
  /* GLOBAL VARIABLES END */
  constructor(
    private http: HttpClient,
    private _customerService: CustomerService,
    private _formBuilder: FormBuilder
  ) {
    this._customerDetails = new Customer();
    this._billingAddress = new CustomerAddress();
    this._billingAddress.csadAddrCode = 1;
    this._shippingAddress = new CustomerAddress();
    this._shippingAddress.csadAddrCode = 2;
    this._customerMasterForm = this._formBuilder.group({
      csName: ["", Validators.required],
      csPanNo: ["", Validators.required],
      csRemark: ["", Validators.required],
      csAreaLocation: ["", Validators.required],
      csSource: ["", Validators.required],
      csContactPerson1: ["", Validators.required],
      csContactPerson2: ["", Validators.required],
      csEmailId: ["", Validators.required],
      csTelNo1: ["", Validators.required],
      csTelNo2: ["", Validators.required],
      csTelNo3: ["", Validators.required],
      csGstNo: ["", Validators.required],
      csBlacklisted: ["N", Validators.required],
      //billing address
      billCsadEditedBy: ["", Validators.required],
      billCsadAddress1: ["", Validators.required],
      billCsadAddress2: ["", Validators.required],
      billCsadAddress3: ["", Validators.required],
      billCsadAddress4: ["", Validators.required],
      billCsadState: ["", Validators.required],
      billCsadCity: ["", Validators.required],
      billCsadPincode: ["", Validators.required],
      billCsadGstNo: ["", Validators.required],

      //shipping address
      shipCsadEditedBy: ["", Validators.required],
      shipCsadAddress1: ["", Validators.required],
      shipCsadAddress2: ["", Validators.required],
      shipCsadAddress3: ["", Validators.required],
      shipCsadAddress4: ["", Validators.required],
      shipCsadState: ["", Validators.required],
      shipCsadCity: ["", Validators.required],
      shipCsadPincode: ["", Validators.required],
      shipCsadGstNo: ["", Validators.required]
    });
    this._customerService._getSingleCustomer(68).subscribe(apiResponse => {
      let response: any;
      response = apiResponse;
      this._customerDetails = response.data[0];
      console.log("this._customerDetails:: ", this._customerDetails);
    });
    this._GET_ALL_STATES_URL();
    this._customerService.getAllCustomer().subscribe(apiResponse => {
      let response: any;
      response = apiResponse;
      this._allCustomers = response.data;
      console.log("this._customerData:: ", this._allCustomers);
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {}
  _searchCustomerClickHandler() {
    if (this._selectedCustomerId === "0") {
      alert("Please select customer to proceed.");
      return false;
    } else {
      this._customerService
        ._getSingleCustomer(this._selectedCustomerId)
        .subscribe(apiResponse => {
          let response: any;
          response = apiResponse;
          this._customerDetails = response.data[0];
          console.log("this._customerDetails:: ", this._customerDetails);
        });
    }
  }
  _modifyCustomerClickHandler() {
    this._customerMasterForm.enable();
  }
  _GET_ALL_STATES_URL() {
    this._customerService.GET_ALL_STATES_URL().subscribe(allStates => {
      let apiResponse: any;
      apiResponse = allStates;
      this._allStates = apiResponse.data;
    });
  }
  _custChangeClickHandler(selectedCustomer) {
    console.log("selectedCustomer :: ", selectedCustomer);
    this._selectedCustomerId = selectedCustomer;
  }
  _deleteCustomerClickHandler() {}
  _shipStateChangeListner(shipStateId) {
    console.log(shipStateId);
    this._customerService
      .GET_ALL_CITIES_URL(shipStateId)
      .subscribe(allCities => {
        let apiResponse: any;
        apiResponse = allCities;
        this._shipCities = apiResponse.data;
      });
  }
  _billStateChangeListner(billStateId) {
    console.log(billStateId);
    this._customerService
      .GET_ALL_CITIES_URL(billStateId)
      .subscribe(allCities => {
        let apiResponse: any;
        apiResponse = allCities;
        this._billCities = apiResponse.data;
      });
  }
}
