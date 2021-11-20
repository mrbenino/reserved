import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {catchError} from 'rxjs/operators';

import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  private formatErrors(error: any): any {
    return throwError(error);
  }

  // private get headers(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*'
  //   });
  // }

  get(path: string, params: any = {}, otherSettings: any = {}): Observable<any> {
    return this.http.get(
      `${this.apiUrl}${path}`,
      {params, ...otherSettings}
    ).pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));

  }

  post(path: string, body: any = {}, params: any = {}): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      params
    ).pipe(catchError(this.formatErrors));
  }

  postFile(path: string, body: any = {}, params: any = {}): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      body,
      params,
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: any): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  getCustomUrl(url: string, options = {}): Observable<any> {
    return this.http.get(url, options).pipe(catchError(this.formatErrors));
  }

  postCustomUrl(path: string, body: any = {}, params: any = {}): Observable<any> {
    return this.http.post(
      `${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }
}
