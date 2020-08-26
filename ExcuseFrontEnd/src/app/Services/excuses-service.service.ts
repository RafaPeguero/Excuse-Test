import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../shared/url';
import { shareReplay, tap } from 'rxjs/operators';
import { Excuse } from '../shared/Models/excuses.model';
import { Observable } from 'rxjs';
import { ExcuseType } from '../shared/Models/excuseType.model';


@Injectable({
  providedIn: 'root'
})
export class ExcusesServiceService {
  ExcusesType$: Observable<any>;

  constructor(private readonly http: HttpClient) { 
    this.GetAllExcusesTypes();
  }

  GetExcuses(): Observable<any> {
    return this.http.get(APIURL.Excuses.GetAllExcuses).pipe(shareReplay(1));
  }

  GetExcuse(Id: number): Observable<any> {
    return this.http.get(APIURL.Excuses.GetExcuse + Id).pipe(shareReplay(1));
  }
  PostExcuse(excuse: Excuse) {
    return this.http.post(APIURL.Excuses.PostExcuse, excuse)
  }
  PutExcuse(id: Number, excuse: Excuse) {
    return this.http.put(APIURL.Excuses.PutExcuse + id, excuse);
  }

  DeleteExcuse(id: number) {
    return this.http.delete(APIURL.Excuses.DeleteExcuse + id);
  }
  GetAllExcusesTypes() {
    this.ExcusesType$ = this.http.get(APIURL.Excuses.GetAllExcusesType).pipe(shareReplay(1));
  }
}
