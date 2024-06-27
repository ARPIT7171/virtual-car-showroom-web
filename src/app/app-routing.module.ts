import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarModelsComponent } from './components/car-models/car-models.component';
import { AddCarComponent } from './components/add-car/add-car/add-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'car-models', component: CarModelsComponent },
  { path:'add-car', component:AddCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
