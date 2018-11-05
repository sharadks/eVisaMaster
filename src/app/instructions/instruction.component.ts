import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'aboutus-page',
  templateUrl: './instruction.html'
})
export class InstructionComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  ngOnInit() {
  }

}
