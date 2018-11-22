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

  save() {

  }
  
  saveAndExit() {

  }
  //remove in future
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}