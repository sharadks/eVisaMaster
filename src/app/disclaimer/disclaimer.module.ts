import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DisclaimerComponent} from './disclaimer.component';
import {SharedModule} from '../shared';

const disclaimerRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'disclaimer',
        component: DisclaimerComponent
    }
]);

@NgModule({
    imports: [
        disclaimerRouting,
        SharedModule
    ],
    declarations: [
        DisclaimerComponent
    ],
    providers: []
})
export class DisclaimerModule {
}
