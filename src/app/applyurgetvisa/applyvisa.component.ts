import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'applyvisa-page',
  templateUrl: './applyvisa.html'
})
export class ApplyVisaComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {
  }

}
