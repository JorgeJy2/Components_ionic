import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild (IonSegment) segmentPage: IonSegment;  
  superHeroes: Observable<any>;
  publisher="";

  constructor(private dataServices:DataService) { }

  ngOnInit() {
    this.segmentPage.value='todos';
    this.superHeroes =this.dataServices.getHeroes();
  }

  segmentChanged(event) {
    if(event.detail.value=="todos")
    {
      this.publisher="";
    }else {
      this.publisher=event.detail.value;
    }
  }

}
