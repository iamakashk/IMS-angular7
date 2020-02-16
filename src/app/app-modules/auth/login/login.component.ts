import { User } from "./../User";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  userid: String = "";
  password: String = "";
  loginValidateURL: String = "http://localhost:8084/login/validate/";
  userLoginDetails: any;

  inputType = "password";
  visible = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    localStorage.setItem("userid", "");
    localStorage.setItem("password", "");
    localStorage.setItem("session", "true");
  }

  ngOnInit() {
    this.form = this.fb.group({
      userid: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  validateUser() {
    this.userid = this.form.get("userid").value;
    this.password = this.form.get("password").value;
    //let user :User = new User();

    this.authService.login(this.form.value);
    localStorage.setItem("name", this.userid + "");
    //console.log(">>>>>>>>>>>>>>>" + this.userid + " pass: " + this.password);
    // if (this.userid.trim().length === 0) {
    //   this.form.get("userid").hasError("required");
    // } else if (this.password.trim().length === 0) {
    //   this.form.get("password").hasError("required");
    // } else {
    //   this.http
    //     .get(`${this.loginValidateURL}/${this.userid}/${this.password}`)
    //     .subscribe(res => {
    //       this.userLoginDetails = res;
    //       console.log(this.userLoginDetails);
    //       if (this.userLoginDetails.responseBean.respCode === "1111") {
    //         console.log("################### LOGIN FAILED ############");
    //       } else {
    //         localStorage.setItem("userid", "" + this.userid);
    //         localStorage.setItem("password", "" + this.password);
    //         //this.router.navigate(["/dashboard"]);
    //       }
    //     });
    //}
    /*
    this.router.navigate(["/"]);
    this.snackbar.open(
      "Lucky you! Looks like you didn't need a password or userid address! For a real application we provide validators to prevent this. ;)",
      "LOL THANKS",
      {
        duration: 10000
      }
    );
    */
  }
}
