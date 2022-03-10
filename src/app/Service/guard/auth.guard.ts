import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private _angularFireAuth: AngularFireAuth, private _router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this._angularFireAuth.currentUser;
    const isAuthenticated = user ? true : false;
    if (!isAuthenticated ) {
      this._router.navigate(['/signin'])
      return false
    }
    // console.log(route )
    console.log(`${state.url}`)
    return isAuthenticated;

  }
  
}