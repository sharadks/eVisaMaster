import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'privacy-page',
  templateUrl: './privacy.html'
})
export class PrivacyComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  ngOnInit() {
  }

}
