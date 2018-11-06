import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'visasoughtdetails-page',
  templateUrl: './visasoughtdetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class VisaSoughtComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}