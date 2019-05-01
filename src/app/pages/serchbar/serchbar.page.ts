import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serchbar',
  templateUrl: './serchbar.page.html',
  styleUrls: ['./serchbar.page.scss'],
})
export class SerchbarPage implements OnInit {

  albums: any[]=[];
  textoBuscar='';

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe
    (albumes=>{
      console.log(albumes);
      this.albums=albumes;
    })
  }

  buscar(event) {
    console.log(event);
    this.textoBuscar=event.detail.value;
  }
}
