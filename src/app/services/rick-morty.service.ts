import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacter(page = 1) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }

  getCharactersName(page = 1, name: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
  }
}
