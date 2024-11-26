import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  public getUserData(params: any): Observable<any>{
    return this.http.get<any>(this.urlApi+'user/login',{params});
  }

  public getActivitiesData(params: any): Observable<any>{
    return this.http.get<any>(this.urlApi+'activities/activity',{params});
  }

  public saveActivityData(params: any): Observable<any>{
    return this.http.put<any>(this.urlApi+'activities/save/a/b/c',{params});
  }
}
