import { NgModule } from "@angular/core";

// Modulos
import { PagesRoutingModule } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

// Padre
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations:
    [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports:
    [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:
    [
        SharedModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }