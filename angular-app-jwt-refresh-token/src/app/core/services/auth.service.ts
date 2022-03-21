import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {
  token: any;
  constructor(private _router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!window.localStorage.getItem('jwt-token')) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
