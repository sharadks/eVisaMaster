import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PrivacyComponent} from './privacy.component';
import {SharedModule} from '../shared';

const privacyRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'privacy',
        component: PrivacyComponent
    }
]);

@NgModule({
    imports: [
        privacyRouting,
        SharedModule
    ],
    declarations: [
        PrivacyComponent
    ],
    providers: []
})
export class PrivacyModule {
}
