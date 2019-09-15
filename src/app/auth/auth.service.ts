import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticated = false;
    public authChange = new Subject<boolean>();

    constructor(
        private auth: AngularFireAuth,
        private router: Router
    ) { }

    initAuthListener() {
        this.auth.authState.subscribe((user) => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
            } else {
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(['/']);
            }
        });
    }

    isLoggedIn(): boolean {
        // return this.isAuthenticated;
        return true;
    }

    async login(email: string, password: string) {
        try {
            const resp = await this.auth.auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        } finally {
            // loading false
        }
    }

    logout() {
        this.auth.auth.signOut();
    }
}
