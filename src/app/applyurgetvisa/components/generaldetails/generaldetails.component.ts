import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService, UserService, ApplicationService } from '../../../shared';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'generaldetails-page',
  templateUrl: './generaldetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class GeneralDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private apiService: ApiService,
    private applicationService: ApplicationService
  ) {}

  model = {
    surname: '',
    givenName: '',
    changedName: false,
    prevGivenName: '',
    prevSurname: '',
    gender: '',
    birthCity: '',
    birthCountry: '',
    citizenshipNo: '',
    religion: '',
    religionOther: '',
    identificationMarks: '',
    eduQualification: '',
    nationalityByBirth: '',
    livedFor2Years: '',
    pptNo: '',
    placeOfIssue: '',
    issueDate: '',
    expiryDate: '',
    pptHeld: false,
    prevPassportCountryIssue: '',
    prevPptICNo: '',
    prePptDateOfIssue: '',
    prePptPlaceOfIssue: '',
    prevPptNationality: ''
  };

  ngOnInit() {
  }
  
  goToNext (){
    this.router.navigate(["applyvisa/addressdetails"]);
  }

  save(data) {
    const formattedData = this.applicationService.createRequestForStep2(data);
    this.apiService
      .post(`${environment.saveApplicationSecondPage}`, formattedData)
      .subscribe(() => this.goToNext(), () => this.goToNext());
      //remove goToNext method from error callback in future  
  }

  saveAndExit(data) {

  }
}