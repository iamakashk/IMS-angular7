import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EnquiryComponent } from "./enquiry.component";

const routes: Routes = [
  {
    path: "new",
    component: EnquiryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule {}
