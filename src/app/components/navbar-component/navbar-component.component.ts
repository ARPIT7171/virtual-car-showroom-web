import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {
  carCategories: { name: string, imageUrl: string }[] = [
    { name: 'COUPE', imageUrl: 'assets/coupe-box.webp' },
    { name: 'CONVERTIBLE', imageUrl: 'assets/convertible-box.avif' },
    { name: 'HATCHBACK', imageUrl: 'assets/hatchback-box.jpg' },
    { name: 'TRUCK', imageUrl: 'assets/truck-box.avif' },
    { name: 'SEDAN', imageUrl: 'assets/sedan-box.webp' },
    { name: 'SUV', imageUrl: 'assets/suv-box.webp' },
    { name: 'VAN', imageUrl: 'assets/van-box.jpg' },
    { name: 'WAGON', imageUrl: 'assets/wagon-box.jpg' }
  ];
  constructor(private router: Router) { }



  ngOnInit(): void {
  }
  

}
