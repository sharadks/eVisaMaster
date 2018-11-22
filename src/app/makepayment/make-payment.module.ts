import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MakePaymentComponent} from './make-payment.component';
import {SharedModule} from '../shared';

const makePaymentRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'make-payment',
        component: MakePaymentComponent
    }
]);

@NgModule({
    imports: [
        makePaymentRouting,
        SharedModule
    ],
    declarations: [
        MakePaymentComponent
    ],
    providers: []
})
export class MakePaymentModule {
}
