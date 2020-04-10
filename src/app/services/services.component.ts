import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  lat: number = 41.6600203;
  lng: number = -88.7526228;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
