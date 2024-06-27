import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SedanComponent } from './components/sedan/sedan.component';
import { SUVComponent } from './components/suv/suv.component';
import { WagonComponent } from './components/wagon/wagon.component';
import { HatchbackComponent } from './components/hatchback/hatchback.component';
import { CoupeComponent } from './components/coupe/coupe.component';
import { ConvertibleComponent } from './components/convertible/convertible.component';
import { TruckComponent } from './components/truck/truck.component';
import { VanComponent } from './components/van/van.component';
import { CarModelsComponent } from './components/car-models/car-models.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './components/add-car/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    DropdownComponent,
    SedanComponent,
    SUVComponent,
    WagonComponent,
    HatchbackComponent,
    CoupeComponent,
    ConvertibleComponent,
    TruckComponent,
    VanComponent,
    CarModelsComponent,
    AddCarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
