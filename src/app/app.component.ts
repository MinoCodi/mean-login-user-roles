import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.models';
import { Role } from './models/role.models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    currentUser: User;

    title = 'mean-user-login';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser$.subscribe(user => this.currentUser = user);
    }

    // getter => user has admin role?
    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    // getter => user logged in
    get isLoggedIn() {
        return this.currentUser;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
