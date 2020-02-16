import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { ViewCustomerComponent } from "./customer/view-customer/view-customer.component";
import { ModifyCustomerComponent } from "./customer/modify-customer/modify-customer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { HttpClientModule } from "@angular/common/http";

import { MastersRoutingModule } from "./masters-routing.module";
import { AreaMasterComponent } from "./area-master/area-master.component";
import { SourceMasterComponent } from "./source-master/source-master.component";
import { EnquiryMasterComponent } from './enquiry-master/enquiry-master.component';
import { ItemmasterComponent } from './itemmaster/itemmaster.component';

@NgModule({
  declarations: [
    AddCustomerComponent,
    ViewCustomerComponent,
    ModifyCustomerComponent,

    AreaMasterComponent,
    SourceMasterComponent,
    EnquiryMasterComponent,
    ItemmasterComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ]
})
export class MastersModule {}
