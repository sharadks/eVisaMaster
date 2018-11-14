import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'generaldetails-page',
  templateUrl: './generaldetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class GeneralDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }
  
  goToNext (){
    this.router.navigate(["applyvisa/addressdetails"]);
  }
}