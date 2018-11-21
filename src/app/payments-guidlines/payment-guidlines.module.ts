import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PaymentGuidleinsComponent} from './payment-guidlines.component';
import {SharedModule} from '../shared';

const paymentRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'payments',
        component: PaymentGuidleinsComponent
    }
]);

@NgModule({
    imports: [
        paymentRouting,
        SharedModule
    ],
    declarations: [
        PaymentGuidleinsComponent
    ],
    providers: []
})
export class PaymentGuidleinsModule {
}
