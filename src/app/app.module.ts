import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { CityService } from './city.service';
import { HttpClientModule }    from '@angular/common/http';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { StationService } from './station.service';
import { LocalisationService } from './localisation.service';
import { AgmCoreModule } from '@agm/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StationComponent } from './station/station.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    PageNotFoundComponent,
    StationComponent,
    SearchComponent,
    HomeComponent
    
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBq_t5qPHzeth6FRotgPoStA3uJP-ZTrxY'
    }),
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [CityService, StationService, LocalisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
