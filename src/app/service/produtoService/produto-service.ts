import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http : HttpClient) { }

    list(): Observable<any>{
        return this.http.get("http://localhost:8080/api/produtos");
    }

    show(id:any): Observable<any>{
        return this.http.get("http://localhost:8080/api/produto/" + id);
    }

    search(id:any): Observable<any>{
        return this.http.get("http://localhost:8080/api/produto/pesquisar?pesquisa" + id);
    }

}
