import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'term-page',
  templateUrl: './term.html'
})
export class TermComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {
  }

}
