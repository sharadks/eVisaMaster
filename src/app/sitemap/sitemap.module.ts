import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SitemapComponent} from './sitemap.component';
import {SharedModule} from '../shared';

const sitemapRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'sitemap',
        component: SitemapComponent
    }
]);

@NgModule({
    imports: [
        sitemapRouting,
        SharedModule
    ],
    declarations: [
        SitemapComponent
    ],
    providers: []
})
export class SitemapModule {
}
