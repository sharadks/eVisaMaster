import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
  constructor(
  ) { }

  createRequestForStep1(data, secretData, apiId) {
    // format data as per backend requirement
    return {
      application_type: data.applType,
      passport_no: null,
      passport_type: data.pptType,
      nationality: data.nationality,
      port_of_arrival: data.portOfArrival,
      date_of_birth: this.formatDateToDB(data.dob),
      email: data.email,
      exp_date_of_arrival: this.formatDateToDB(data.journeyDate),
      contact_no: null,
      visa_service: data.eVisaService,
      visa_service_type: data.eVisaServiceType,
      temporary_id: null,
      api_secrets: { api_id: apiId.api_id, api_key: secretData.api_key }
    };
  }

  createRequestForStep2(data, secretData, apiId, temporary_id) {
    return {
      api_secrets: { api_id: apiId.api_id, api_key: secretData.api_key },
      temporary_id: temporary_id,
      surname: data.surname,
      given_name: data.givenName,
      have_changed_name: data.changedName,
      changed_surname: data.prevSurname,
      changed_name: data.prevGivenName,
      gender: data.gender,
      town_city_of_birth: data.birthCity,
      country_of_birth: data.birthCountry,
      citizenship_national_id: data.citizenshipNo,
      religion: data.religion,
      religion_other: data.religionOther,
      visible_identification_marks: data.identificationMarks,
      education_qualification: data.eduQualification,
      nationality_birth_naturalization: data.nationalityByBirth,
      previous_nationality: data.prevNationality,
      leave_for_2_years: data.livedFor2Years,
      passport_no: data.pptNo,
      place_of_issue: data.placeOfIssue,
      date_of_issue: this.formatDateToDB(data.issueDate),
      date_of_expiry: this.formatDateToDB(data.expiryDate),
      other_valid_passport: data.pptHeld,
      other_country_of_issue: data.prevPassportCountryIssue,
      other_passport_no: data.prevPptICNo,
      other_date_of_issue: this.formatDateToDB(data.prePptDateOfIssue),
      other_place_of_issue: data.prePptPlaceOfIssue,
      nationality_in_other_passport: data.prevPptNationality
    };
  }

  createRequestForStep3(data, secretData, apiId, temporary_id) {
    return {
      api_secrets: { api_id: apiId.api_id, api_key: secretData.api_key },
      temporary_id: temporary_id,
      house_street_no: data.pres_houseNo,
      village_town_city: data.pres_city,
      state_province_district: data.pres_state,
      postal_zipcode: data.pres_zip,
      country: data.pres_country,
      phone_no: data.phoneNo,
      mobile_no: data.mobile,
      phouse_street_no: data.perma_houseNo,
      pvillage_town_city: data.perma_city,
      pstate_province_district: data.perma_state,
      father_name: data.father_name,
      father_nationality: data.father_nationality,
      previous_father_nationality: data.father_prev_nationality,
      father_place_of_birth: data.father_birth_place,
      father_country_of_birth: data.father_birth_country,
      mother_name: data.mother_name,
      previous_mother_nationality: data.mother_nationality,
      mother_place_of_birth: data.mother_birth_place,
      mother_country_of_birth: data.mother_birth_country,
      applicant_marital_status: data.applicant_marital_status,
      spouse_name: data.spouse_name,
      spouse_nationality: null,
      spouse_previous_nationality: null,
      spouse_place_of_birth: null,
      spouse_country_of_birth: null,
      grandparent_belongs_pakistan: data.pakistaniParents,
      grandparent_belongs_pakistan_details: data.pakistaniParentsDetails,
      spouse_occupation: data.pres_occupation,
      spouse_occupation_others: data.pres_occupationOthers,
      spouse_parent_employer_business: data.pres_employer,
      spouse_parent_employer_address: data.pres_address,
      spouse_parent_employer_designation: data.pres_designation,
      spouse_parent_employer_phone: data.pres_phone,
      spouse_past_occupation: null,
      in_security_organization: data.militaryPoliceFlag,
      security_organization: data.militaryOrg,
      security_designation: data.militaryDesignation,
      security_rank: data.militaryRank,
      security_place_of_posting: data.militaryPlaceOfPosting
    };
  }

  createRequestForStep4(data, secretData, apiId, temporary_id) {
    //in this case, the function size can be made short as both frontend and backend model names are same.
    return {
      api_secrets: { api_id: apiId.api_id, api_key: secretData.api_key },
      temporary_id: temporary_id,
      places_visited: data.places_visited,
      places_visited_2: data.places_visited_2,
      exp_port_of_exit: data.exp_port_of_exit,
      ever_visit_india: data.ever_visit_india,
      visit_address: data.visit_address,
      visit_address1: data.visit_address1,
      cities: data.cities,
      last_visa_no: data.last_visa_no,
      type_of_visa: data.type_of_visa,
      place_of_issue: data.place_of_issue,
      date_of_issue: data.date_of_issue,
      visit_permission_refused: data.visit_permission_refused,
      if_so_control_no_date: data.if_so_control_no_date,
      country_visited_10_years: data.country_visited_10_years,
      visited_saarc: data.visited_saarc,
      saarc_country: data.saarc_country,
      year: data.year,
      no_of_visits: data.no_of_visits,
      reference_name_in_india: data.reference_name_in_india,
      reference_address: data.reference_address,
      reference_address1: data.reference_address1,
      reference_phone: data.reference_phone,
      reference_name_in_iceland: data.reference_name_in_iceland,
      reference_iceland_address: data.reference_iceland_address,
      reference_iceland_address1: data.reference_iceland_address1,
      reference_iceland_phone: data.reference_iceland_phone,
      meeting_details_of_friend_relative: data.meeting_details_of_friend_relative,
      meeting_address: data.meeting_address,
      meeting_state: data.meeting_state,
      meeting_district: data.meeting_district,
      meeting_phone_no: data.meeting_phone_no,
      meeting_expected_port_of_exit_from_india: data.meeting_expected_port_of_exit_from_india,
      yoga_name_institute: data.yoga_name_institute,
      yoga_address: data.yoga_address,
      yoga_state: data.yoga_state,
      yoga_district: data.yoga_district,
      yoga_phone_no: data.yoga_phone_no,
      yoga_expected_port_of_exit_from_india: data.yoga_expected_port_of_exit_from_india,
      recreation_name_institute: data.recreation_name_institute,
      recreation_address: data.recreation_address,
      recreation_state: data.recreation_state,
      recreation_district: data.recreation_district,
      recreation_phone_no: data.recreation_phone_no,
      recreation_expected_port_of_exit_from_india: data.recreation_expected_port_of_exit_from_india,
      medical_name_institute: data.medical_name_institute,
      medical_address: data.medical_address,
      medical_state: data.medical_state,
      medical_district: data.medical_district,
      medical_phone_no: data.medical_phone_no,
      medical_expected_port_of_exit_from_india: data.medical_expected_port_of_exit_from_india,
      set_up_industrial_business_name_institute: data.set_up_industrial_business_name_institute,
      set_up_industrial_business_address_phone_no: data.set_up_industrial_business_address_phone_no,
      set_up_industrial_business_website: data.set_up_industrial_business_website,
      set_up_industrial_business_nature_of_business_product: data.set_up_industrial_business_nature_of_business_product,
      set_up_industrial_business_expected_port_of_exit_from_india: data.set_up_industrial_business_expected_port_of_exit_from_india,
      recruit_manpower_name_institute: data.recruit_manpower_name_institute,
      recruit_manpower_address_phone_no: data.recruit_manpower_address_phone_no,
      recruit_manpower_website: data.recruit_manpower_website,
      recruit_manpower_name_and_contact_of_company_representative: data.recruit_manpower_name_and_contact_of_company_representative,
      recruit_manpower_nature_of_job: data.recruit_manpower_nature_of_job,
      recruit_manpower_place_recruitment: data.recruit_manpower_place_recruitment,
      recruit_manpower_expected_port_of_exit_from_india: data.recruit_manpower_expected_port_of_exit_from_india,
      sale_purchase_trade_name_institute: data.sale_purchase_trade_name_institute,
      sale_purchase_trade_address_phone_no: data.sale_purchase_trade_address_phone_no,
      sale_purchase_trade_website: data.sale_purchase_trade_website,
      sale_purchase_trade_nature_of_business_product: data.sale_purchase_trade_nature_of_business_product,
      sale_purchase_trade_expected_port_of_exit_from_india: data.sale_purchase_trade_expected_port_of_exit_from_india,
      participation_name: data.participation_name,
      participation_address_phone_no: data.participation_address_phone_no,
      participation_website: data.participation_website,
      participation_name_address_of_exhibition_trade_fair: data.participation_name_address_of_exhibition_trade_fair,
      participation_expected_port_of_exit_from_india: data.participation_expected_port_of_exit_from_india,
      expert_specialist_name: data.expert_specialist_name,
      expert_specialist_address_phone_no: data.expert_specialist_address_phone_no,
      expert_specialist_website: data.expert_specialist_website,
      expert_specialist_details_name: data.expert_specialist_details_name,
      expert_specialist_details_address_phone_no: data.expert_specialist_details_address_phone_no,
      expert_specialist_details_website: data.expert_specialist_details_website,
      expert_specialist_expected_port_of_exit_from_india: data.expert_specialist_expected_port_of_exit_from_india,
      conducting_name_address_of_travel_agency: data.conducting_name_address_of_travel_agency,
      conducting_cities_to_be_visited: data.conducting_cities_to_be_visited,
      conducting_agent_associate_name: data.conducting_agent_associate_name,
      conducting_agent_associate_address_phone_no: data.conducting_agent_associate_address_phone_no,
      conducting_agent_associate_expected_port_of_exit_from_india: data.conducting_agent_associate_expected_port_of_exit_from_india,
      attend_meeting_applicant_company_name: data.attend_meeting_applicant_company_name,
      attend_meeting_applicant_company_address_phone_no: data.attend_meeting_applicant_company_address_phone_no,
      attend_meeting_applicant_company_website: data.attend_meeting_applicant_company_website
    }
  }

  createRequestForcheckpartialy(data) {
    // format data as per backend requirement
    return {
      page: data.form
    };
  }

  formatDateToDB(input) {
    let date = new Date(input);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}
