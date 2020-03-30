import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  post(serviceName: string, data: any): Observable<any> {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    headers.append('Access-Control-Allow-Origin', '*');

    const options = { header: headers, withCredentials: false };

    const url = environment.url + serviceName;

    return this.http.post(url, data, {...options}).pipe(shareReplay(1));
  }

  get(serviceName: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = httpOptions;
    console.log(options)

    const url = environment.url + serviceName;

    return this.http.get(url, options).pipe(shareReplay(1));
  }
}
