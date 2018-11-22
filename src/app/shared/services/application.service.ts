import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {
  constructor (
  ) {}

  createRequestForStep1(data) {
    // format data as per backend requirement
    return {
      application_type: data.applType,
      passport_no: null,
      passport_type: data.pptType,
      nationality: data.nationality,
      port_of_arrival: data.portOfArrival,
      date_of_birth: data.dob,
      email: data.email,
      exp_date_of_arrival: null,
      contact_no: null,
      visa_service: null,
      visa_service_type: null,
      temporary_id: null,
      api_secrets: null
    };
  }
  
  createRequestForStep2(data) {
    // format data as per backend requirement
    return data;
  }
}
