import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[]=[];
  constructor(private  apiService: ApiService){}

  ngOnInit() {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getUserData({username:'anagomez',password:'mypassword456'}).subscribe( data=> {
      this.data = data;
    })
  }

}
