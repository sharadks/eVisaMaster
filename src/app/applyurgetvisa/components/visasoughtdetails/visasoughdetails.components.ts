import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, ApplicationService } from "../../../shared";
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
    private apiService: ApiService,
    private applicationService: ApplicationService
  ) {
    this.temporary_id = this.route.snapshot.queryParamMap.get('id');
  }

  model: {
    places_visited: '',
      places_visited_2: '',
      exp_port_of_exit: '',
      ever_visit_india: '',
      visit_address: '',
      visit_address1: '',
      cities: '',
      last_visa_no: '',
      type_of_visa: '',
      place_of_issue: '',
      date_of_issue: '',
      visit_permission_refused: '',
      if_so_control_no_date: '',
      country_visited_10_years: '',
      visited_saarc: '',
      saarc_country: '',
      year: '',
      no_of_visits: '',
      reference_name_in_india: '',
      reference_address: '',
      reference_address1: '',
      reference_phone: '',
      reference_name_in_iceland: '',
      reference_iceland_address: '',
      reference_iceland_address1: '',
      reference_iceland_phone: '',
      meeting_details_of_friend_relative: '',
      meeting_address: '',
      meeting_state: '',
      meeting_district: '',
      meeting_phone_no: '',
      meeting_expected_port_of_exit_from_india: '',
      yoga_name_institute: '',
      yoga_address: '',
      yoga_state: '',
      yoga_district: '',
      yoga_phone_no: '',
      yoga_expected_port_of_exit_from_india: '',
      recreation_name_institute: '',
      recreation_address: '',
      recreation_state: '',
      recreation_district: '',
      recreation_phone_no: '',
      recreation_expected_port_of_exit_from_india: '',
      medical_name_institute: '',
      medical_address: '',
      medical_state: '',
      medical_district: '',
      medical_phone_no: '',
      medical_expected_port_of_exit_from_india: '',
      set_up_industrial_business_name_institute: '',
      set_up_industrial_business_address_phone_no: '',
      set_up_industrial_business_website: '',
      set_up_industrial_business_nature_of_business_product: '',
      set_up_industrial_business_expected_port_of_exit_from_india: '',
      recruit_manpower_name_institute: '',
      recruit_manpower_address_phone_no: '',
      recruit_manpower_website: '',
      recruit_manpower_name_and_contact_of_company_representative: '',
      recruit_manpower_nature_of_job: '',
      recruit_manpower_place_recruitment: '',
      recruit_manpower_expected_port_of_exit_from_india: '',
      sale_purchase_trade_name_institute: '',
      sale_purchase_trade_address_phone_no: '',
      sale_purchase_trade_website: '',
      sale_purchase_trade_nature_of_business_product: '',
      sale_purchase_trade_expected_port_of_exit_from_india: '',
      participation_name: '',
      participation_address_phone_no: '',
      participation_website: '',
      participation_name_address_of_exhibition_trade_fair: '',
      participation_expected_port_of_exit_from_india: '',
      expert_specialist_name: '',
      expert_specialist_address_phone_no: '',
      expert_specialist_website: '',
      expert_specialist_details_name: '',
      expert_specialist_details_address_phone_no: '',
      expert_specialist_details_website: '',
      expert_specialist_expected_port_of_exit_from_india: '',
      conducting_name_address_of_travel_agency: '',
      conducting_cities_to_be_visited: '',
      conducting_agent_associate_name: '',
      conducting_agent_associate_address_phone_no: '',
      conducting_agent_associate_expected_port_of_exit_from_india: '',
      attend_meeting_applicant_company_name: '',
      attend_meeting_applicant_company_address_phone_no: '',
      attend_meeting_applicant_company_website: ''
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