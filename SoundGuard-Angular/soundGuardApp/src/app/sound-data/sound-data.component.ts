import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-data',
  templateUrl: './sound-data.component.html',
  styleUrls: ['./sound-data.component.css']
})
export class SoundDataComponent implements OnInit {

  url = `https://iotnet.cibicom.dk/1/nwk/app/BE7A133E/device/A8610A3130197313/last-data`;

  value = 'test';

  constructor(private http: HttpClient) {

    const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Authorization', `Bearer AAABXg7P_8gYHhwLavwtpHORwZAXcu_st5EI7bTcrpi9raggY`);

    this.http.get(this.url, {headers}).subscribe(responseData => {
      console.log(responseData);
    });
   }

  ngOnInit(): void {
  }

}
