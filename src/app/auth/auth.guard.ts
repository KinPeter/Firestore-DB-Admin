import { CanLoad, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canLoad(route: Route) {
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }
}
