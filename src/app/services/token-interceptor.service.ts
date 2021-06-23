import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLocalStorage } from '../models/user/userLocalStorage';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept = (request, next) => {
    let user: UserLocalStorage;
    this.storageService.subscribe("user", userStorage => user = userStorage);
    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${user ? user.id : ""}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
