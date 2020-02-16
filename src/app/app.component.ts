import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "inventory-management";
  isLoginPage: boolean = false;
  constructor(private router: Router) {
    // console.log("this.router.url: ", this.router.url);
    // if (this.router.url === "/" || this.router.url === "/login") {
    //   //alert("MATCHED");
    // } else {
    // }
    /*
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        if (event["url"] == "/login" || event["url"] == "/") {
          console.log("login");
          this.isLoginPage = true;
        } else {
          this.isLoginPage = false;
          console.log("NU");

        }
      }
    });
    */
  }
}
