import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'disclaimer-page',
  templateUrl: './disclaimer.html'
})
export class DisclaimerComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}
