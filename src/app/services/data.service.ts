import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private htt:HttpClient) { }

  getUsers() {
    return this.htt.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.htt.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums(){
    return this.htt.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.htt.get('/assets/data/superheroes.json')
    .pipe(delay(2000));
  }


}
