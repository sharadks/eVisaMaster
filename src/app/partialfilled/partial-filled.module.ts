import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PartialFilledComponent} from './partial-filled.component';
import {SharedModule} from '../shared';

const partialFilledRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'partial-filled',
        component: PartialFilledComponent
    }
]);

@NgModule({
    imports: [
        partialFilledRouting,
        SharedModule
    ],
    declarations: [
        PartialFilledComponent
    ],
    providers: []
})
export class PartialFilledModule {
}
