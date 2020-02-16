import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AreaMasterComponent } from "./app-modules/masters/area-master/area-master.component";
import { SourceMasterComponent } from "./app-modules/masters/source-master/source-master.component";
import { DashboardComponent } from "./app-modules/dashboard/dashboard.component";
import { LoginComponent } from "./app-modules/auth/login/login.component";
import { AuthGuard } from "./app-modules/auth/auth.gaurd";

const routes: Routes = [
  {
    path: "masters",
    loadChildren: "./app-modules/masters/masters.module#MastersModule"
  },
  {
    path: "enquiry",
    loadChildren: "./app-modules/enquiry/enquiry.module#EnquiryModule"
  },
  {
    path: "",
    loadChildren: "./app-modules/auth/auth.module#AuthModule"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
