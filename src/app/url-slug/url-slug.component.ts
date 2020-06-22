import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';
import { UrlServicesService } from '../url-services.service';

@Component({
  selector: 'app-url-slug',
  templateUrl: './url-slug.component.html',
  styleUrls: ['./url-slug.component.css']
})
export class UrlSlugComponent implements OnInit {

  fUrl: url;
  constructor(private urlService: UrlServicesService) { }

  ngOnInit(): void {
    this.urlService.getUrl().subscribe(
      (data)=>{
        this.fUrl = new url(data.fullLink,
          data.slug);
        console.log(data.fullLink);
        window.location.href = this.fUrl.fullLink;
      }
    ) 
  }

}
