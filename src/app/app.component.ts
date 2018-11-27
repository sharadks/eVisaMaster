import {Component, OnChanges, OnInit} from '@angular/core';
import { UserService } from './shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements  OnInit, OnChanges {
  currentUser: any;
  constructor (private userService: UserService, private router:Router) {
  }

  // This method should be deleted in future.
  // This behavior should be handled architecturely using components/modules
  removeSidebarforAllForms() {
    return !window.location.pathname.includes('applyvisa');
  }


  ngOnInit() {
    this.userService.populate();
    this.currentUser = this.userService.getCurrentUser();
    // this.router.navigateByUrl('/' + this.currentUser.landingPage);
  }
  ngOnChanges() {
    this.userService.populate();
  }
}
