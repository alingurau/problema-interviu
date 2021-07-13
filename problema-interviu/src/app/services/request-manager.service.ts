import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestManagerService {

  constructor(
    private http: HttpClient
  ) { }

  getDocuments(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/documents`)
  }

  getDocumentsByParentId(parentId: number): Observable<any>  {
    return this.http.get(`${environment.API_URL}/api/documents/${parentId}`);
  }
}
