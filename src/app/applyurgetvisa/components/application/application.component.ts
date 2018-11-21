import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../../shared";

@Component({
  selector: "application-page",
  templateUrl: "./application.html",
  styleUrls: ["../../applyvisa.css"]
})
export class ApplicationComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

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
    eTouristvisa_service: false,
    etouristValue: null,
    eMedicalValue_service: false,
    eMedicalValue: null,
    eBusinessValue_service: false,
    eBusinessValue: null,
    eMedicalAttvisa_service: false,
    eMedicalAttvisaValue: null
  };
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit() {}

  save() {
    this.goToNext();
  }

  private goToNext() {
    this.router.navigate(["applyvisa/generaldetails"]);
  }

  get diagnostic() { return JSON.stringify(this.firstForm); }
}
