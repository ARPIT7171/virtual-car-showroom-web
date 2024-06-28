import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddCarService } from 'src/app/services/add-car/add-car.service';
import { CarModel } from 'src/app/modules/car-model.enum';
import { Car } from 'src/app/modules/car';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.scss']
})
export class CarModelsComponent implements OnInit {

  model:CarModel;
  cars: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private addCarService:AddCarService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.model = params['model'];
      this.getCarsByModelType();
    });
    
  }

  getCarsByModelType(): void {
    this.addCarService.getAllCarsByModelType(this.model).subscribe(cars => {
      this.cars = cars;
    });
  }
 

}
