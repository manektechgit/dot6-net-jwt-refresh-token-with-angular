import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request.clone();
    {
      // Token Header
      if (localStorage.getItem('jwt-token')) {
        authReq = authReq.clone({
          headers: authReq.headers.set(
            'Authorization',
            'jwt ' +  localStorage.getItem('jwt-token')
          ),
        });
      }
      return next.handle(authReq);
    }
  }

}
