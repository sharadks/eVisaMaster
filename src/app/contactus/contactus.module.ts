import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContactUsComponent} from './contactus.component';
import {SharedModule} from '../shared';

const contactUsRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'contactus',
        component: ContactUsComponent
    }
]);

@NgModule({
    imports: [
        contactUsRouting,
        SharedModule
    ],
    declarations: [
        ContactUsComponent
    ],
    providers: []
})
export class ContactUsModule {
}
