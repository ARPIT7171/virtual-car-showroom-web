import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Car {
  name: string;
  model: string;
  engine: string;
  color: string;
  price: string;
  vin: string;
  image: string;
}

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.scss']
})
export class CarModelsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const model = params['model'];
      this.getAllCarsByModel(model);
    });
  }

  getAllCarsByModel(model: string): void {
    this.http.get<Car[]>(`/api/cars/model/${model}`).subscribe(
      (data: Car[]) => {
        this.cars = data;
      },
      error => {
        console.error('Error fetching cars:', error);
      }
    );
  }

}
