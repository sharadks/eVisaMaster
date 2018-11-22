import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServicesComponent} from './services.component';
import {SharedModule} from '../shared';

const servicesRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'services',
        component: ServicesComponent
    }
]);

@NgModule({
    imports: [
        servicesRouting,
        SharedModule
    ],
    declarations: [
        ServicesComponent
    ],
    providers: []
})
export class ServicesModule {
}
