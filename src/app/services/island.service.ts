import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IslandService {

  private apiUrl: string = "http://41.73.213.144:8650/api/Island";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  add(body: any) {
    return this.http.post(this.apiUrl,body);
  }

  update(body: any) {

  }

  getById(id: number) {

  }
}

