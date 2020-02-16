import { ItemmasterComponent } from "./itemmaster/itemmaster.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { ModifyCustomerComponent } from "./customer/modify-customer/modify-customer.component";
import { ViewCustomerComponent } from "./customer/view-customer/view-customer.component";

import { AreaMasterComponent } from "./area-master/area-master.component";
import { SourceMasterComponent } from "./source-master/source-master.component";

const routes: Routes = [
  {
    path: "customer/add",
    component: AddCustomerComponent
  },
  { path: "customer/view", component: ViewCustomerComponent },
  { path: "customer/modify", component: ModifyCustomerComponent },
  {
    path: "area",
    component: AreaMasterComponent
  },
  {
    path: "source",
    component: SourceMasterComponent
  },
  {
    path: "item-master",
    component: ItemmasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule {}
