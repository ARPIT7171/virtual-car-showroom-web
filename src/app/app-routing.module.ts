import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarModelsComponent } from './components/car-models/car-models.component';
import { AddCarComponent } from './components/add-car/add-car/add-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'add-car', component:AddCarComponent},
  { path:'car/:model', component:CarModelsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
