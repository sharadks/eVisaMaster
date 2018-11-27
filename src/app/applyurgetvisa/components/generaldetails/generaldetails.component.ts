import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UserService, ApplicationService } from '../../../shared';
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
  ) { }

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
    prevNationality: '',
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

  goToNext() {
    this.router.navigate(["applyvisa/addressdetails"]);
  }

  save(data) {
    const apiId = { api_id: '2' };
    this.apiService.post(`${environment.getSecreteData}`, apiId).subscribe((secretData) => {
      const formattedData = this.applicationService.createRequestForStep2(data, secretData, apiId);
      this.apiService
        .post(`${environment.saveApplicationSecondPage}`, formattedData)
        .subscribe(() => this.goToNext());
    });
  }

  saveAndExit(data) {

  }
}