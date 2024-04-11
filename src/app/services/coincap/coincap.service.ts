import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cours} from '../../model/Cours';
import {Exchanges} from '../../model/Exchanges';
@Injectable({
  providedIn: 'root'
})
export class CoincapService {

  private readonly url = 'https://api.coincap.io/v2';

  constructor(readonly http: HttpClient) {
  }
  public getCoursId(id: string): Observable<HttpResponse<Cours>> {
    return this.http.get<Cours>(this.url + '/assets/' + id, {observe: 'response'});
  }

  public getCours(): Observable<HttpResponse<Cours[]>> {
    return this.http.get<Cours[]>(this.url + '/assets/' , {observe: 'response'});
  }

  public getExchanges(): Observable<HttpResponse<Exchanges[]>> {
    return this.http.get<Exchanges[]>(this.url + '/exchanges/', {observe: 'response'});
  }

}
