import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'uploaddocument-page',
  templateUrl: './uploaddocument.html',
  styleUrls: ['../../applyvisa.css']
})
export class UploadDocumentComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}