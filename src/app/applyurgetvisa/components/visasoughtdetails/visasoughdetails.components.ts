import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, ApiService, ApplicationService } from "../../../shared";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'visasoughtdetails-page',
  templateUrl: './visasoughtdetails.html',
  styleUrls: ['../../applyvisa.css']
})
export class VisaSoughtComponent implements OnInit {
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

  model: {
    
  };

  ngOnInit() {
  }

  save(data) {
    const apiId = { api_id: '4' };
    this.apiService.post(`${environment.getSecreteData}`, apiId).subscribe((secretData) => {
      const formattedData = this.applicationService.createRequestForStep4(data, secretData, apiId, this.temporary_id);
      this.apiService
        .post(`${environment.saveApplicationForthPage}`, formattedData)
        .subscribe((response) => this.goToNext(response && response.Action));
    });
  }

  goToNext(temporary_id) {
    this.router.navigate(["applyvisa/uploadphoto"], {queryParams: {id: temporary_id}});
  }
}