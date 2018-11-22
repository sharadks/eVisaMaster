import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';

import {AboutUsModule} from './aboutus/aboutus.module';
import {ApplyVisaModule} from './applyurgetvisa/applyvisa.module';
import {ContactUsModule} from './contactus/contactus.module';
import {DocumentRequiredModule} from './documentrequired/document.module';
import {InstructionModule} from './instructions/instruction.module';
import {PrivacyModule} from './privacypolicy/privacy.module';
import {TermModule} from './termcondition/term.module';


import {EvisaFeeModule} from './evisa-fee/evisa-fee.module';
import {FaqModule} from './faq/faq.module';
import {PaymentGuidleinsModule} from './payments-guidlines/payment-guidlines.module';
import {RefundPolicyModule} from './refund-policy/refund-policy.module';
import {ServicesModule} from './services/services.module';
import {EligibleCountriesModule} from './eligiblecontries/eligiblecountries.module';
import {MakePaymentModule} from './makepayment/make-payment.module';
import {PartialFilledModule} from './partialfilled/partial-filled.module';
import {FileUploadModule} from "angular-file-uploader";


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from 'angular2-datatable';

import {
    ApiService,
    AuthGuard,
    FooterComponent,
    HeaderComponent,
    JwtService,
    SharedModule,
    UserService,
    ReportService,
    SidebarComponent,
    BottomComponent,
    ApplicationService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
		BottomComponent
    ],
    exports: [],
    imports: [
        BrowserModule,
        HomeModule,
        rootRouting,
        SharedModule,
        NgbModule.forRoot(),
        DataTableModule,
        AboutUsModule,
        ApplyVisaModule,
        ContactUsModule,
        DocumentRequiredModule,
        InstructionModule,
        PrivacyModule,
        TermModule,
        EvisaFeeModule,
        FaqModule,
        PaymentGuidleinsModule,
        RefundPolicyModule,
        ServicesModule,
        EligibleCountriesModule,
        MakePaymentModule,
        PartialFilledModule,
        FileUploadModule
    ],
    providers: [
        ApiService,
        AuthGuard,
        JwtService,
        UserService,
        ReportService,
        ApplicationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
