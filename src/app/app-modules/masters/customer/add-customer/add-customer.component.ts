import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/Customer.model";
import { CustomerAddress } from "src/app/model/CustomerAddress.model";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from "../customer.service";
import { all } from "q";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"]
})
export class AddCustomerComponent implements OnInit {
  //variables start
  _customerDetails: Customer;
  _billingAddress: CustomerAddress;
  _shippingAddress: CustomerAddress;
  _customerMasterForm: any;
  _addressArray: CustomerAddress[] = [];
  _allStates: any;
  _billCities: any;
  _shipCities: any;
  _allSources: any;
  _allAreaLocation: any;

  //variables end
  constructor(
    private _formBuilder: FormBuilder,
    private _customerService: CustomerService
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
      csBlacklisted: ["", Validators.required],
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

    this._getAllStates();
    this._getAllSources();
    this._getAllAreaLocation();
  }

  ngOnInit() {}

  _addCustomerClickHandler() {
    //adding address in main model
    this._customerDetails.customerAddress.push(this._billingAddress);
    this._customerDetails.customerAddress.push(this._shippingAddress);
    console.log(JSON.stringify(this._customerDetails));
    this._customerDetails.csCreatedBy = "0001";
    // this._billingAddress.csadCreatedBy = "0001";
    // this._shippingAddress.csadCreatedBy = "0001";
    // this._billingAddress.csadTsCreated = "2016-04-11";
    // this._shippingAddress.csadTsCreated = "2016-04-11";
    // this._customerDetails.csCustSupplrCode = 13;
    // this._customerDetails.csDeletedFlg = "Y";
    this._customerService
      ._customerActions(this._customerDetails, "ADD")
      .subscribe(apiResponse => {
        console.log("response after adding a customer: ", apiResponse);
        alert(
          `Customer with ID: ${apiResponse.data[0].csCustSupplrCode} & NAME:${apiResponse.data[0].csName} successfully added.`
        );
      });
    alert(" ");
  }

  _getAllStates() {
    this._customerService.GET_ALL_STATES_URL().subscribe(allStates => {
      let apiResponse: any;
      apiResponse = allStates;
      this._allStates = apiResponse.data;
    });
  }

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
  _getAllSources() {
    this._customerService._getSources("GET").subscribe(apiResponse => {
      this._allSources = apiResponse["data"];
    });
  }
  _getAllAreaLocation() {
    this._customerService._getAreaLocation().subscribe(apiResponse => {
      this._allAreaLocation = apiResponse["data"];
    });
  }
}
