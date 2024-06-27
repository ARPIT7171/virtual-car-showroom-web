import { CarColor } from "./car-color.enum";
import { CarEngineType } from "./car-engine-type.enum";
import { CarModel } from "./car-model.enum";

export class Car {
    id:string;
    name:string;
    model:CarModel;
    engine:CarEngineType;
    color:CarColor;
    price:string;
    vin:string;
    image:string;
}
