import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cours} from '../../model/Cours';
import {Exchanges} from '../../model/Exchanges';
@Injectable({
  providedIn: 'root'
})
export class CoincapService {

  private readonly _url = CoincapService + 'api.coincap.io/v2';

  constructor(private _http: HttpClient) {
  }
  getCoursId(id: string): Observable<HttpResponse<Cours>> {
    return this._http.get<any>(this._url + '/assets/' + id, {observe: 'response'});
  }

  getCours(): Observable<HttpResponse<Cours[]>> {
    return this._http.get<any>(this._url + '/assets/' , {observe: 'response'});
  }

  getexchanges(): Observable<HttpResponse<Exchanges[]>> {
    return this._http.get<any>(this._url + '/exchanges/', {observe: 'response'});
  }

}
