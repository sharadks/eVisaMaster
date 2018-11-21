import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RefundPolicyComponent} from './refund-policy.component';
import {SharedModule} from '../shared';

const refundRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'refund',
        component: RefundPolicyComponent
    }
]);

@NgModule({
    imports: [
        refundRouting,
        SharedModule
    ],
    declarations: [
        RefundPolicyComponent
    ],
    providers: []
})
export class RefundPolicyModule {
}
