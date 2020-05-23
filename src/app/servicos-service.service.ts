import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicosServiceService {
  private API: string = "../assets/servicesData.json";

  constructor(private http: HttpClient) { }

  listDataService(): Observable<DataService[]> {
    const url = this.API;
    return this.http.get<DataService[]>(url).pipe(
      map((x: any) => x.body.data as DataService[]),
    );

  }

}

export interface DataService {
  name: string;
  img: string;
  text: string;
}
