import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ApplyVisaComponent} from './applyvisa.component';
import {SharedModule} from '../shared';

const applyVisaRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'applyvisa',
        component: ApplyVisaComponent
    }
]);

@NgModule({
    imports: [
        applyVisaRouting,
        SharedModule
    ],
    declarations: [
        ApplyVisaComponent
    ],
    providers: []
})
export class ApplyVisaModule {
}
