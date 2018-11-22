import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService } from '../../../shared';

@Component({
  selector: 'uploadphotograph-page',
  templateUrl: './uploadphotograph.html',
  styleUrls: ['../../applyvisa.css']
})
export class UploadPhotographComponent implements OnInit {
  public afuConfig;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.afuConfig = {
      uploadAPI: {
        url:"https://example-file-upload-api"
      }
  };
  }

  goToNext (){
    this.router.navigate(["applyvisa/uploaddocument"]);
  }
  DocUpload(res){
    console.log("---------------", res);
  }

}