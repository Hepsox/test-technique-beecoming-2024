import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ListCardComponent } from './list-card/list-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './header/header.component';
import { CardInfosComponent } from './card-infos/card-infos.component';
import { FormatPopulationPipe } from './format-population.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    MapComponent,
    HeaderComponent,
    CardInfosComponent,
    FormatPopulationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
