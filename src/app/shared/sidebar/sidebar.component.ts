import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/app-modules/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  isLoginPage: boolean = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {
    // console.log("this.router.url: ", this.router.url);
    // if (this.router.url === "/" || this.router.url === "/login") {
    //   //alert("MATCHED");
    //   this.isLoginPage = true;
    // } else {
    //   this.isLoginPage = false;
    //}
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
