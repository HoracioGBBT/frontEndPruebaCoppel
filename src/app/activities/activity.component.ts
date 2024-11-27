import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ActivityMapper } from '../mapper/activity.mapper';
import { Activity } from '../model/activity';

@Component({
  selector: 'app-home',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  data: Activity[]=[];
  activitySelected!: Activity;
  loginForm = new FormGroup({
    user: new FormControl(),
    idAct: new FormControl(),
    actDate: new FormControl(),
    description:new FormControl(),
    status: new FormControl(false)
});

  constructor(
    private  apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private activityMapper: ActivityMapper
  ){}


  async ngOnInit() {
    this.loginForm.get('user')?.setValue(Number(this.route.snapshot.paramMap.get('idUser')))
    
    await this.getActivities();
  }


  async getActivities(){
    this.apiService.getActivitiesData(this.loginForm.value).subscribe( data=> {
      this.data = this.activityMapper.toModelList(data.Activities);
    })
  }

  async saveActivity(){
    this.apiService.saveActivityData(this.loginForm.value).subscribe( data=> {
      this.getActivities();
      this.clean();
    })
  }

    editActivity(index: number) {
      const activity = this.data[index];
      this.activitySelected = activity;
      this.loginForm.patchValue({
        idAct: activity.idAct,
        actDate: new Date(activity.actDate!).toISOString().split('T')[0],
        description: activity.description,
        status: activity.status === 1  
      });
    }

  async back(){
    this.router.navigate( [ '' ] );
  }

  clean(){
    this.loginForm.reset();
    this.loginForm.get('status')?.setValue(false);
    this.loginForm.get('user')?.setValue(Number(this.route.snapshot.paramMap.get('idUser')))
  }



}
