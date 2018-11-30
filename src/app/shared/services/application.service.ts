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
    return {
      
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
