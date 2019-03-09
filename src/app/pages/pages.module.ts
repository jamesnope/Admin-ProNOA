import { NgModule } from '@angular/core';
// Modulos
import { PagesRoutingModule } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// ng2-chars
import { ChartsModule } from 'ng2-charts';

// Padre
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations:
    [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
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
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { }
