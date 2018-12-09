import { UserService } from './../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user.models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentApiUser: User;

  userSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    // get user from secure api
    this.userSubscription = this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => this.currentApiUser = user);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
