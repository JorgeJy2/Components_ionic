import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private dataService:DataService,private toastCtr:ToastController) { }

  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;

  ngOnInit() {
    this.usuarios=this.dataService.getUsers();
    this.dataService.getUsers().subscribe(console.log);
  }

  async presentToas(message:string){
    const toast=await this.toastCtr.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  favorite(user){
    console.log("Favorite ",user);
    this.lista.closeSlidingItems();
    this.presentToas("Save in Favorite");
   
  }
  share(user){
    console.log("share ",user);
    this.lista.closeSlidingItems();
    this.presentToas("Share");
  }
  borra(user){
    console.log("borra ",user);
    this.lista.closeSlidingItems();
    this.presentToas("Delete");
  }

}
