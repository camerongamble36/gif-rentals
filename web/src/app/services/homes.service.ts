import { Injectable } from '@angular/core';
import { HOMES_LIST } from '../data/dummy_data';
import Home from '../model/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomesService {
  private _homesList: Home[] = [...HOMES_LIST];

  constructor() {}

  get homes() {
    return [...this._homesList];
  }

  findHomeById(id: string): Home {
    const home = this._homesList.find((home) => home.id === id);

    return home!;
  }
}
