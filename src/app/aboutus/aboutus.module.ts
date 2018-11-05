import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutUsComponent} from './aboutus.component';
import {SharedModule} from '../shared';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'aboutus',
        component: AboutUsComponent
    }
]);

@NgModule({
    imports: [
        aboutRouting,
        SharedModule
    ],
    declarations: [
        AboutUsComponent
    ],
    providers: []
})
export class AboutUsModule {
}
