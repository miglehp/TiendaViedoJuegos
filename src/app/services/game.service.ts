import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { GAMES} from '../db/games.db';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  httpClient = inject(HttpClient);
  baseUrl: string;

  constructor() { 
    this.baseUrl = 'http://localhost:3000/api/games'
  }
  getAll(): Promise<Game[]> {
    return firstValueFrom(
      this.httpClient.get<Game[]>(this.baseUrl)
    )
  }

  registro(formValue: any): Promise<Game> {
    return firstValueFrom(
      this.httpClient.post<Game>(`${this.baseUrl}`, formValue)
    )
  }


  constructor() { }


  getAll(): Game[]{
    return GAMES;
  }

  getById(id: number): Game | undefined {
      return GAMES.find(game => game.id === id);
    }

  

}
