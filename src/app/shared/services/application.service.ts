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
      visa_service: null,
      visa_service_type: data.applType,
      temporary_id: null,
      api_secrets: { api_id: apiId.api_id, api_key: secretData.api_key }
    };
  }

  createRequestForStep2(data, secretData, apiId) {
    return {
      api_secrets: { api_id: apiId.api_id, api_key: secretData.api_key },
      temporary_id: null,
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
      nationality_birth_naturalization: data.nationality,
      previous_nationality: data.prev_nationality,
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

  createRequestForStep3(data) {
    // format data as per backend requirement
    return data;
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
