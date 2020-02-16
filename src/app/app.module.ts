import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CityMasterComponent } from "./app-modules/masters/city-master/city-master.component";
import { InputFieldComponent } from "./app-modules/common/input-field/input-field.component";
import { HeaderComponent } from "./shared/header/header.component";
import { CommonButtonComponent } from "./shared/controls/common-button/common-button.component";
import { CommonInputComponent } from "./shared/controls/common-input/common-input.component";
import { CommonSelectComponent } from "./shared/controls/common-select/common-select.component";
import { CommonMultiSelectComponent } from "./shared/controls/common-multi-select/common-multi-select.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './app-modules/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CityMasterComponent,
    InputFieldComponent,
    HeaderComponent,
    CommonButtonComponent,
    CommonInputComponent,
    CommonSelectComponent,
    CommonMultiSelectComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
