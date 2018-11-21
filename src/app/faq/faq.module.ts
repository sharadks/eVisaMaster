import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FaqComponent} from './faq.component';
import {SharedModule} from '../shared';

const faqRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'faq',
        component: FaqComponent
    }
]);

@NgModule({
    imports: [
        faqRouting,
        SharedModule
    ],
    declarations: [
        FaqComponent
    ],
    providers: []
})
export class FaqModule {
}
