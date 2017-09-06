import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ListsComponent } from './components/lists/lists.component';
import { SimpleTableComponent } from './tables/simple-table/simple-table.component';
import { FixedHeaderTableComponent } from './tables/fixed-header-table/fixed-header-table.component';
import { CardsComponent } from './components/cards/cards.component';
import { nvD3 } from '../core/charts/nvD3/nvD3.component';
import { IconsComponent } from './icons/icons.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { Level5Component } from './levels/level5/level5.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressChartComponent } from '../core/widgets/progress-chart/progress-chart.component';
import { LoadingOverlayComponent } from '../core/loading-overlay/loading-overlay.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { environment } from "../../environments/environment";
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { D3ChartService } from '../core/charts/nvD3/nvD3.service';
import { MailService } from './apps/inbox/mail.service';
import { CalendarModule } from 'angular-calendar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from '../app-routing.module';
import { MaterialComponentsModule } from '../material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { HighlightModule } from '../core/highlightjs/highlight.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';
import {
  AssistedCheckoutComponent,
  RegistersComponent, 
  OverallStoreHealthComponent,
  UpcomingDeploymentsComponent, 
  InfrastructureHealthComponent,
  MultiRolePcComponent
} from './dashboard/components';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApi
    }),
    QuillModule,
    HighlightModule,
    SortablejsModule,
    CalendarModule.forRoot(),
    PerfectScrollbarModule.forChild(),
    RoundProgressModule
  ], 
  declarations: [
    NotificationsComponent,
    ButtonsComponent,  
    ListsComponent,
    SimpleTableComponent,
    FixedHeaderTableComponent,
    CardsComponent,
    nvD3,   
    IconsComponent,
    GridListComponent,
    MenuComponent,
    SliderComponent,
    SnackBarComponent,
    TooltipComponent,
    Level5Component,   
    DashboardComponent,
    ProgressChartComponent,
    LoadingOverlayComponent,
    AutocompleteComponent,
    AssistedCheckoutComponent,
    RegistersComponent, 
    OverallStoreHealthComponent,
    UpcomingDeploymentsComponent, 
    InfrastructureHealthComponent,
    MultiRolePcComponent
  ],
  providers: [
    D3ChartService,
    MailService,
  ]
})
export class DemoModule { }
