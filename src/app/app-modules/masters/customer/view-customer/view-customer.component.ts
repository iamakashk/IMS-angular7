import { FormBuilder, Validators } from "@angular/forms";
import { CustomerAddress } from "src/app/model/CustomerAddress.model";
import { CustomerService } from "./../customer.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "src/app/model/Customer.model";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-view-customer",
  templateUrl: "./view-customer.component.html",
  styleUrls: ["./view-customer.component.css"]
})
export class ViewCustomerComponent implements OnInit {
  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */

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
  _selectedCustomer: any = "0";
  _allSources: any;
  _allAreaLocation: any;
  _editCustomer: boolean = true;
  _selectedBillState: any;
  _selectedShipState: any;
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
    // this._customerService._getSingleCustomer(69).subscribe(apiResponse => {
    //   let response: any;
    //   response = apiResponse;
    //   this._customerDetails = response.data[0];
    //   console.log("this._customerDetails:: ", this._customerDetails);
    //   console.log(
    //     " this._customerDetails.customerAddress[0] :: ",
    //     this._customerDetails.customerAddress[0]
    //   );
    //   this._billingAddress = this._customerDetails.customerAddress[0];
    //   this._shippingAddress = this._customerDetails.customerAddress[1];
    // });
    this._GET_ALL_STATES_URL();
    this._customerService.getAllCustomer().subscribe(apiResponse => {
      let response: any;
      response = apiResponse;
      this._allCustomers = response.data;
      console.log("this._customerData:: ", this._allCustomers);
    });
    this._getAllSources();
    this._getAllAreaLocation();
  }

  ngOnInit() {
    this._customerMasterForm.disable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  _searchCustomerClickHandler() {
    if (this._selectedCustomer === "0") {
      alert("Please select customer to proceed.");
      return false;
    } else {
      this._customerService
        ._getSingleCustomer(this._selectedCustomer)
        .subscribe(
          apiResponse => {
            let response: any;
            response = apiResponse;
            this._customerDetails = response.data[0];
            console.log("this._customerDetails:: ", this._customerDetails);
            this._billingAddress = this._customerDetails.customerAddress[0];
            this._shippingAddress = this._customerDetails.customerAddress[1];
            if (response.response.respCode === "0000") {
              this._selectedShipState = this._shippingAddress.csadState;
              this._selectedBillState = this._billingAddress.csadState;
            }
          },
          error => console.log("Error: ", error),
          () => {
            this._shipStateChangeListner(this._selectedShipState);
            this._billStateChangeListner(this._selectedBillState);
          }
        );
    }
  }

  _modifyCustomerClickHandler() {
    this._editCustomer = false;
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
    this._selectedCustomer = selectedCustomer;
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
  _modifyCustomer(actionType) {
    let action = actionType;
    //adding address in main model
    this._customerDetails.customerAddress = [];
    this._customerDetails.customerAddress.push(this._billingAddress);
    this._customerDetails.customerAddress.push(this._shippingAddress);
    console.log(" MODIFY CUSTOMER: ", this._customerDetails);
    this._customerDetails.csCreatedBy = "0001";
    this._customerService
      ._customerActions(this._customerDetails, action)
      .subscribe(apiResponse => {
        console.log(
          "response after adding a customer: ",
          apiResponse,
          "--- ",
          action
        );
        this._customerMasterForm.reset();
        this._refreshCustomerList();
        if (
          apiResponse.response.respCode === "0000" &&
          apiResponse.data[0].csDeletedFlg === "Y"
        ) {
          alert(
            `Customer with ID: ${apiResponse.data[0].csCustSupplrCode} & NAME:${apiResponse.data[0].csName} successfully deleted.`
          );
        } else if (apiResponse.response.respCode === "0000") {
          alert(
            `Customer with ID: ${apiResponse.data[0].csCustSupplrCode} & NAME:${apiResponse.data[0].csName} successfully updated.`
          );
        }
      });
  }
  _refreshCustomerList() {
    this._customerService.getAllCustomer().subscribe(apiResponse => {
      let response: any;
      response = apiResponse;
      this._allCustomers = response.data;
      console.log("this._customerData:: ", this._allCustomers);
    });
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
  { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
  { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
  { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
  { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
  { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
  { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
  { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
  { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
  { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
];
