import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTileComponent } from './hero-tile/hero-tile.component';
import { HeroDetailsPopupComponent } from './hero-details-popup/hero-details-popup.component';

import { ConfirmOptions, Position } from 'angular2-bootstrap-confirm';
import { Positioning } from 'angular2-bootstrap-confirm/position';
import { ConfirmModule } from 'angular2-bootstrap-confirm';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { LoadingComponent } from "app/shared/loading/loading.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroTileComponent,
    HeroDetailsPopupComponent,
    LoadingComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
