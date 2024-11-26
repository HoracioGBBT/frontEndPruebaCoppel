import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
 
});
  constructor(
    private  apiService: ApiService,
    private router: Router,
  ){}


  ngOnInit() {
    //this.llenarData();
  }


  async login(){
    this.apiService.getUserData(this.loginForm.value).subscribe( data=> {
      if(data.loggedUser){
        this.router.navigate( [ '/activity/'+data?.loggedUser?.idUser! ] );
      }
    })
  }

}
