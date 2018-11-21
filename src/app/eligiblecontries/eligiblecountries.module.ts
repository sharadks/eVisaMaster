import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EligibleCountriesComponent} from './eligibilecountries.component';
import {SharedModule} from '../shared';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'eligible-countiies',
        component: EligibleCountriesComponent
    }
]);

@NgModule({
    imports: [
        aboutRouting,
        SharedModule
    ],
    declarations: [
        EligibleCountriesComponent
    ],
    providers: []
})
export class EligibleCountriesModule {
}
