import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, ApiService, ApplicationService } from "../../../shared";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'addressdetails-page',
  templateUrl: './addressdetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class AddressDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private apiService: ApiService,
    private applicationService: ApplicationService
  ) {}

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

  save(data){
    debugger
    const formattedData = this.applicationService.createRequestForStep3(data);
    this.apiService
      .post(`${environment.saveApplicationThirdPage}`, formattedData)
      .subscribe(() => this.goToNext(), () => this.goToNext());
      //remove goToNext method from error callback in future  
  }

  saveAndExit(data){

  }

  goToNext (){
    this.router.navigate(["applyvisa/visa"]);
  }

}