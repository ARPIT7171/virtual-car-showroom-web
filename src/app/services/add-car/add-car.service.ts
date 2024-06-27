import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { CarModel } from 'src/app/modules/car-model.enum';


@Injectable({
  providedIn: 'root'
})
export class AddCarService {
  private baseUrl = 'http://localhost:8000/api/';  


  constructor(private http:HttpClient) { }
  createCar(car: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-car', car);  
  }
  getAllCarsByModelType(model:CarModel): Observable<any> {  
    return this.http.get(`${this.baseUrl}/car-model/${model}`);  
  } 
}
