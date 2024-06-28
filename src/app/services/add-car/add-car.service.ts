import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';  
import { Car } from 'src/app/modules/car';
import { CarModel } from 'src/app/modules/car-model.enum';


@Injectable({
  providedIn: 'root'
})
export class AddCarService {
  private baseUrl = "http://localhost:8000/api";  

  
  constructor(private http:HttpClient) { }

  createCar(car: Car): Observable<Object> {  
    return this.http.post((`${this.baseUrl}/add-car`), car);  
  }
  getAllCarsByModelType(model:string): Observable<any[]> {  
    return this.http.get<any[]>((`${this.baseUrl}/get-models`));  
  } 
}
