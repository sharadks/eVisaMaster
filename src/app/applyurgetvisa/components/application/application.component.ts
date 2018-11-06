import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'application-page',
  templateUrl: './application.html',
  styleUrls: ['../../applyvisa.css']
})
export class ApplicationComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}