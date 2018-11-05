import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InstructionComponent} from './instruction.component';
import {SharedModule} from '../shared';

const instructionRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'instruction',
        component: InstructionComponent
    }
]);

@NgModule({
    imports: [
        instructionRouting,
        SharedModule
    ],
    declarations: [
        InstructionComponent
    ],
    providers: []
})
export class InstructionModule {
}
