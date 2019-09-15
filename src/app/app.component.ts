import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // isLoggedIn: boolean;
    isLoggedIn = true;

    constructor(
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.auth.initAuthListener();
        // this.auth.authChange.subscribe((status) => {
        //     this.isLoggedIn = status;
        // });
    }

    logout() {
        this.auth.logout();
    }
}
