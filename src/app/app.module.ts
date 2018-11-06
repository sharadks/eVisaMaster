import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';

import {AboutUsModule} from './aboutus/aboutus.module';
import {ApplyVisaModule} from './applyurgetvisa/applyvisa.module';
import {ContactUsModule} from './contactus/contactus.module';
import {DocumentRequiredModule} from './documentrequired/document.module';
import {InstructionModule} from './instructions/instruction.module';
import {PrivacyModule} from './privacypolicy/privacy.module';
import {TermModule} from './termcondition/term.module';


import {LogoutModule} from './logout/logout.module';
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
    SidebarComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ],
    exports: [],
    imports: [
        BrowserModule,
        AuthModule,
        HomeModule,
        rootRouting,
        SharedModule,
        NgbModule.forRoot(),
        LogoutModule,
        DataTableModule,
        AboutUsModule,
        ApplyVisaModule,
        ContactUsModule,
        DocumentRequiredModule,
        InstructionModule,
        PrivacyModule,
        TermModule
    ],
    providers: [
        ApiService,
        AuthGuard,
        JwtService,
        UserService,
        ReportService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
