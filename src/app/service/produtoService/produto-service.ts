import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http : HttpClient) { }

    list(): Observable<any>{
        return this.http.get("http://localhost:8080/api/produto");
    }

    show(id:any): Observable<any>{
        return this.http.get("http://localhost:8080/api/produto/" + id);
    }

    search(inputSearch:any): Observable<any>{
        return this.http.get("http://localhost:8080/api/produto/busca?pesquisa=" + inputSearch);
    }

}
