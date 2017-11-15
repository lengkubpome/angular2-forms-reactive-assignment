import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { log } from 'util';
import { CanLoad } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.authService.isAuthenticated();
    }

    canLoad(route: Routes): boolean {

        return this.authService.isAuthenticated();
    }

}