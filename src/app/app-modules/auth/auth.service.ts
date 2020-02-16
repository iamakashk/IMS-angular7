import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { User } from "./User";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(user: User) {
    console.log("User----------- ", user);
    if (user.userid !== "" && user.password !== "") {
      this.loggedIn.next(true);
      this.router.navigate(["dashboard"]);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(["/login"]);
  }
}
