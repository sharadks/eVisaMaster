import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'uploadphotograph-page',
  templateUrl: './uploadphotograph.html',
  styleUrls: ['../../applyvisa.css']
})
export class UploadPhotographComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}