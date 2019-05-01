import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingCtr:LoadingController) { }
  loading:any;
  ngOnInit() {
    this.presentLoadingWithOptions("Espere");
    setTimeout(()=>{
      this.loading.dismiss();
    },2000);
  }

  async presentLoadingWithOptions(message:string) {
    this.loading= await this.loadingCtr.create({
     // spinner: null,
     // duration: 5000,
      message,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return this.loading.present();
  }
}
