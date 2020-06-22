import { Component, OnInit } from '@angular/core';
import { UrlServicesService } from '../url-services.service';
import { url } from '../url';



@Component({
  selector: 'app-url-main',
  templateUrl: './url-main.component.html',
  styleUrls: ['./url-main.component.css']
})


export class UrlMainComponent implements OnInit {

  gUrl: url;
  constructor(private urlService: UrlServicesService) { }

  ngOnInit(): void {
  }

  createAnUrl(frm){
    console.log(frm.value);
    this.urlService.generateURL(frm.value).subscribe(
      (data)=>{
        console.log(data);
        this.gUrl = new url(data.fullLink,
          data.slug);
      }
    )
  }

}
