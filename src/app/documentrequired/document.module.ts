import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DocumentRequiredComponent} from './document.component';
import {SharedModule} from '../shared';

const documentRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'document',
        component: DocumentRequiredComponent
    }
]);

@NgModule({
    imports: [
        documentRouting,
        SharedModule
    ],
    declarations: [
        DocumentRequiredComponent
    ],
    providers: []
})
export class DocumentRequiredModule {
}
