import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, UserService, ApplicationService } from '../../../shared';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'generaldetails-page',
  templateUrl: './generaldetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class GeneralDetailsComponent implements OnInit {
  temporary_id: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private apiService: ApiService,
    private applicationService: ApplicationService
  ) {
    this.temporary_id = this.route.snapshot.queryParamMap.get('id');
  }

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

  goToNext(temporary_id) {
    this.router.navigate(["applyvisa/addressdetails"], {queryParams: {id: temporary_id}});
  }

  save(data) {
    const apiId = { api_id: '2' };
    this.apiService.post(`${environment.getSecreteData}`, apiId).subscribe((secretData) => {
      const formattedData = this.applicationService.createRequestForStep2(data, secretData, apiId, this.temporary_id);
      this.apiService
        .post(`${environment.saveApplicationSecondPage}`, formattedData)
        .subscribe((response) => this.goToNext(response && response.Action));
    });
  }

  saveAndExit(data) {

  }
}