import { Component, OnInit } from '@angular/core';
import { AddCarService } from 'src/app/services/add-car/add-car.service';
import { Car } from 'src/app/modules/car';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  car : Car=new Car();
  constructor(private addCarService:AddCarService) { }
  
  // submitted = false;  
  // carsaveform=new FormGroup({  
  //   name:new FormControl(),  
  //   engine:new FormControl(),  
  //   vin:new FormControl(),  
  //   image:new FormControl(),  
  //   price:new FormControl(),  
  //   model:new FormControl(),  
  //   color:new FormControl()  
  // });  

  ngOnInit(): void {  
  }
  // addCar(addCar){
  //   this.car=new Car();
  //   this.car.name=this.CarName.value;
  //   this.car.model=this.CarModel.value;
  //   this.car.color=this.CarColor.value;
  //   this.car.price=this.CarPrice.value;
  //   this.car.vin=this.CarVin.value;
  //   this.car.engine=this.CarEngine.value;
  //   this.car.image=this.CarImage.value;
  //   this.submitted=true;
  //   this.save();
  // }
  save():void {  
    this.addCarService.createCar(this.car)  
      .subscribe(data => {
        console.log(data);
        this.car = new Car();
    }  );  
      
  }  
  // get CarName(){
  //   return this.carsaveform.get('name');
  // }
  // get CarModel(){
  //   return this.carsaveform.get('model');
  // }
  // get CarEngine(){
  //   return this.carsaveform.get('engine');
  // }
  // get CarColor(){
  //   return this.carsaveform.get('color');
  // }
  // get CarPrice(){
  //   return this.carsaveform.get('price');
  // }
  // get CarVin(){
  //   return this.carsaveform.get('vin');
  // }
  // get CarImage(){
  //   return this.carsaveform.get('image');
  // }
  // addCarForm(){
  //   this.submitted=false;
  //   this.carsaveform.reset();
  // }
  onSubmit(): void{
    this.save();
  }

}
