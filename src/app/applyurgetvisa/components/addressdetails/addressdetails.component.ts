import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, ApiService, ApplicationService } from "../../../shared";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'addressdetails-page',
  templateUrl: './addressdetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class AddressDetailsComponent implements OnInit {
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
    pres_houseNo: '',
    pres_city: '',
    pres_country: '',
    pres_state: '',
    pres_zip: '',
    phoneNo: '',
    mobile: '',
    differentAddrFlag: false,
    perma_houseNo: '',
    perma_city: '',
    perma_state: '',
    father_name: '',
    father_nationality: '',
    father_prev_nationality: '',
    father_birth_place: '',
    father_birth_country: '',
    mother_name: '',
    mother_nationality: '',
    mother_prev_nationality: '',
    mother_birth_place: '',
    mother_birth_country: '',
    applicant_marital_status: '',
    pakistaniParents: 'NO',
    pakistaniParentsDetails: '',
    pres_occupation: '',
    pres_occupationOthers: '',
    pres_employer: '',
    pres_designation: '',
    pres_address: '',
    pres_phone: '',
    prev_occupation: '',
    prev_occupationOthers: '',
    militaryPoliceFlag: 'NO',
    militaryOrg: '',
    militaryDesignation: '',
    militaryRank: '',
    militaryPlaceOfPosting: '',
  };

  ngOnInit() {
  }

  save(data) {
    const apiId = { api_id: '3' };
    this.apiService.post(`${environment.getSecreteData}`, apiId).subscribe((secretData) => {
      const formattedData = this.applicationService.createRequestForStep3(data, secretData, apiId, this.temporary_id);
      this.apiService
        .post(`${environment.saveApplicationThirdPage}`, formattedData)
        .subscribe((response) => this.goToNext(response && response.Action));
    });
  }

  saveAndExit(data) {

  }

  goToNext(temporary_id) {
    this.router.navigate(["applyvisa/visa"], {queryParams: {id: temporary_id}});
  }

}