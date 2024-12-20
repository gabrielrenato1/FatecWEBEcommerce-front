import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../../modals/users/users";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    

    constructor(private http : HttpClient) {}

    login(user:Users): Observable<any>{
        return this.http.post("http://localhost:8080/api/login", user);
    }

    register(user: Users) : Observable<any>{
        return this.http.post("http://localhost:8080/api/register", user);
    }

}
