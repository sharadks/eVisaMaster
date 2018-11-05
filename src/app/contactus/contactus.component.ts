import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'contactus-page',
  templateUrl: './contactus.html'
})
export class ContactUsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  ngOnInit() {
  }

}
