import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-data',
  templateUrl: './sound-data.component.html',
  styleUrls: ['./sound-data.component.css']
})
export class SoundDataComponent implements OnInit {

  url = `http://localhost:8000/`;

  value = 'test';

  constructor(private http: HttpClient) {

    this.http.get(this.url).subscribe(responseData => {
      console.log(responseData);
    });
   }

  ngOnInit(): void {
  }

}
