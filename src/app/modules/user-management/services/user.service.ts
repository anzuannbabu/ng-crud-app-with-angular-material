import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = environment.apiUrl + '/User';

    constructor(private http: HttpClient) { }

    getById(id: number):Observable<User> {
        return this.http.get<any>(this.apiUrl + '/' + id).pipe(
            map((res:User) => res = {...res,
                fullName: res.firstName + ' ' + res.middleName + ' ' + res.lastName
            })
        );
    }
}
