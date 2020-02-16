import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EnquiryRoutingModule } from "./enquiry-routing.module";
import { EnquiryComponent } from "./enquiry.component";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [EnquiryComponent],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnquiryModule {}
