import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'document-page',
  templateUrl: './document.html'
})
export class DocumentRequiredComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  ngOnInit() {
  }

}
