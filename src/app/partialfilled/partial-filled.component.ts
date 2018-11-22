import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService, ApiService, ApplicationService } from '../shared';
import { environment } from "../../environments/environment";

@Component({
  selector: 'partialfilled-page',
  templateUrl: './partial-filled.html',
  styleUrls: ['./partial-filled.component.css']
})
export class PartialFilledComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private apiService: ApiService,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
  }

  save(data) {
    const formattedData = this.applicationService.createRequestForcheckpartialy(data);
    this.apiService
      .post(`${environment.Getfromno}`, formattedData)
      .subscribe(() => this.goToNext(), () => this.goToNext());
      //remove goToNext method from error callback in future  
  }

  private goToNext() {
    this.router.navigate(["applyvisa/application"]);
  }

}