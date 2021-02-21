import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Island } from '../models/island.model';

@Injectable({
  providedIn: 'root'
})
export class IslandService {

  private apiUrl: string = environment.apiUrl + "/Island";

  constructor(private http: HttpClient) { }

  getAll():Observable<Island[]> {
    return this.http.get<Island[]>(this.apiUrl);
  }

  add(body: any):Observable<Island> {
    return this.http.post<Island>(this.apiUrl,body);
  }

  update(body: any):Observable<Island> {
    return this.http.put<Island>(this.apiUrl,body);
  }

  getById(id: number):Observable<Island> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Island>(url);
  }
}

//
