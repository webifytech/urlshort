import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { url } from './url';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlServicesService {

  private myUrl = "https://api.zubku.site/";

  url: object ={};

  constructor(private http: HttpClient, private router: Router) { }

  generateURL(frm):Observable<url>{
    this.url ={
      "fullLink": frm.theURL
    }
    return this.http.post<url>(this.myUrl,this.url,
      httpOptions);
  }

  getUrl():Observable<url>{
    return this.http.get<url>("https://api.zubku.site"+this.router.url,httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
