import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherOutputComponent } from './weather-output/weather-output.component';

const routes: Routes = [
	{path: '', redirectTo: '/dallas', pathMatch: 'full' },
	{path: ':city', component: WeatherOutputComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
