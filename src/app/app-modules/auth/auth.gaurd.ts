import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("name") != null) {
      console.log("USER NOT LOGGED IN YET");
      return true;
    } else {
      console.log("USER SUCCESSFULLY LOGGED IN");
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
