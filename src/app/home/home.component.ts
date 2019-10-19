import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { static: true }) public el: any;

  @HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
      this.el.previousSlide();
  }

  @HostListener('swiperight', ['$event']) public swipeNext(event: any) {
      this.el.nextSlide();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
