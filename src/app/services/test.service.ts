import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class TestService {
public name: string = "default value";
  constructor() { }
}
