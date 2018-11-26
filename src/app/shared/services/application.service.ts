import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
  constructor(
  ) { }

  createRequestForStep1(data, secretData) {
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
      api_secrets: { api_id: secretData.api_id, api_key: secretData.api_key }
    };
  }

  createRequestForStep2(data) {
    // format data as per backend requirement
    return data;
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
