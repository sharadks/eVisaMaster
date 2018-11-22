import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../shared';

@Component({
  selector: 'partialfilled-page',
  templateUrl: './partial-filled.html',
  styleUrls: ['./partial-filled.component.css']
})
export class PartialFilledComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

}
