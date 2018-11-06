import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'confirmdetails-page',
  templateUrl: './confirmdetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class ConfirmDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}