import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';
import { url } from './url';
import { Router } from '@angular/router';

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
    return this.http.get<url>("https://api.zubku.site"+this.router.url,httpOptions);
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
