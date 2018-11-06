import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ApplyVisaComponent} from './applyvisa.component';

import {AddressDetailsComponent} from './components/addressdetails/addressdetails.component';
import {ApplicationComponent} from './components/application/application.component';
import {ConfirmDetailsComponent} from './components/confirmdetails/confirmdetails.component';
import {GeneralDetailsComponent} from './components/generaldetails/generaldetails.component';
import {UploadDocumentComponent} from './components/uploaddocument/uploaddocumet.component';
import {UploadPhotographComponent} from './components/uploadphotograph/uploadphotograph.component';
import {VisaSoughtComponent} from './components/visasoughtdetails/visasoughdetails.components';
import {SharedModule} from '../shared';

const applyVisaRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'applyvisa',
        component: ApplyVisaComponent,
        children:[ 
            {path: '', component: ApplicationComponent}, 
            {path: 'addressdetails', component: AddressDetailsComponent},
            {path: 'generaldetails', component: GeneralDetailsComponent}, 
            {path: 'visa', component: VisaSoughtComponent},
            {path: 'uploadphoto', component: UploadPhotographComponent}, 
            {path: 'uploaddocument', component: UploadDocumentComponent},
            {path: 'confirm', component: ConfirmDetailsComponent}
        ]
    }
]);

@NgModule({
    imports: [
        applyVisaRouting,
        SharedModule
    ],
    declarations: [
        ApplyVisaComponent,
        AddressDetailsComponent,
        ApplicationComponent,
        ConfirmDetailsComponent,
        GeneralDetailsComponent,
        UploadDocumentComponent,
        UploadPhotographComponent,
        VisaSoughtComponent
    ],
    providers: []
})
export class ApplyVisaModule {
}
