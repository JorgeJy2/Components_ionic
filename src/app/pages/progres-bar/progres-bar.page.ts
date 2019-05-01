import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.page.html',
  styleUrls: ['./progres-bar.page.scss'],
})
export class ProgresBarPage implements OnInit {
  procentaje=0.05;
  constructor() { }

  ngOnInit() {
  }

  cambioRango(event)
  {
    console.log(event);
    console.log(event.detail.value);
    this.procentaje=(event.detail.value)/100;
  }

}
