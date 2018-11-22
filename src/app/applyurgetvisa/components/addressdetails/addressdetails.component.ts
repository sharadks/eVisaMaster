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

  };

  ngOnInit() {
  }

  save(data){
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