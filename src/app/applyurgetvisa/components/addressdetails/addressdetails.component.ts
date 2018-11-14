import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'addressdetails-page',
  templateUrl: './addressdetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class AddressDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  goToNext (){
    this.router.navigate(["applyvisa/visa"]);
  }

}