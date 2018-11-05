import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TermComponent} from './term.component';
import {SharedModule} from '../shared';

const termRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'term',
        component: TermComponent
    }
]);

@NgModule({
    imports: [
        termRouting,
        SharedModule
    ],
    declarations: [
        TermComponent
    ],
    providers: []
})
export class TermModule {
}
