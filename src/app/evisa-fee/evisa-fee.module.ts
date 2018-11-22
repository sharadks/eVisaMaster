import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EvisaFeeComponent} from './evisa-fee.component';
import {SharedModule} from '../shared';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'evisa-fee',
        component: EvisaFeeComponent
    }
]);

@NgModule({
    imports: [
        aboutRouting,
        SharedModule
    ],
    declarations: [
        EvisaFeeComponent
    ],
    providers: []
})
export class EvisaFeeModule {
}
