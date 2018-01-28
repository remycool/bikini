import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StationComponent } from './station/station.component';

const routes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'city/:name', component: CityDetailComponent },
  {path:'city/:city-name/station/:station-name', component:StationComponent},
  { path: '', redirectTo: '/cities', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

