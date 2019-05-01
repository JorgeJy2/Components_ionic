import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  
  items= Array(30);

  constructor(private popoverCtr:PopoverController) { }

  ngOnInit() {}

  onClick(item: number) {
    console.log('Item',item);
    this.popoverCtr.dismiss({
      item
    });
  }
}
