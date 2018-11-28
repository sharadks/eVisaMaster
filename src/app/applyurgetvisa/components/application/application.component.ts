import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { UserService, ApiService, ApplicationService } from "../../../shared";
import { environment } from "../../../../environments/environment";
import { CaptchaComponent } from 'angular-captcha';

@Component({
  selector: "application-page",
  templateUrl: "./application.html",
  styleUrls: ["../../applyvisa.css"]
})
export class ApplicationComponent implements OnInit {
  /**
   * BotDetect CAPTCHA component.
   */
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;

  captchaCode: any;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private apiService: ApiService,
    private applicationService: ApplicationService
  ) { }

  firstForm = {
    applType: "",
    pptType: "",
    nationality: "",
    portOfArrival: "",
    dob: null,
    email: "",
    email_re: "",
    journeyDate: null,
    captcha: "",
    eVisaService: null,
    eVisaServiceType: null,
    submitted: false
  };
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  ngOnInit() { }

  save(data) {
    const apiId = { api_id: 1 };
    this.apiService.post(`${environment.getSecreteData}`, apiId).subscribe((secretData) => {
      const formattedData = this.applicationService.createRequestForStep1(data, secretData, apiId);
      this.apiService
        .post(`${environment.saveApplicationFirstPage}`, formattedData)
        .subscribe((response) => this.goToNext(response && response.Action),()=>{},()=>{this.firstForm.submitted = false;});
    });
  }

  private goToNext(temporary_id) {
    this.router.navigate(["applyvisa/generaldetails"], {queryParams: {id: temporary_id}});
  }

  handleVisaServiceChange(e) {
    this.firstForm.eVisaService = e.target.value; 
  }

  /**
   * Validate captcha at server-side.
   */
  validate(value, valid): void {
    if (!valid) {
      return;
    }

    const postData = {
      captchaCode: this.captchaComponent.captchaCode,
      captchaId: this.captchaComponent.captchaId
    }

    this.apiService.post(`${environment.captchaValidationAPI}`, postData).subscribe((response) => {
      if (response.json().success) {
        // CAPTCHA validation passed at server-side
      } else {
        // CAPTCHA validation falied at client-side
      }
      // reload Captcha image
      this.captchaComponent.reloadImage();
    });
  }
}
