import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { SharedModule } from '../shared/shared.module';

//RoutingModules
import { PagesRoutingModule } from './pages.routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
