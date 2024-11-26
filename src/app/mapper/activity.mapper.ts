import { Injectable } from "@angular/core";
import { Mapper } from "../interfaces/maper.interface";
import { Activity } from "../model/activity";


@Injectable({
    providedIn: 'root'
})

export class ActivityMapper implements Mapper<Activity, any> {
    public toModel(value: any): Activity {
   

        const activity = new Activity(
            value.idAct,
            value.description,
            value.actDate,
            value.status,
            value.user
            
        );
  
        return activity;
    }

    public toEntity(model: Activity): any {
        return {
            idAct: model.idAct,
            description: model.description,
            actDate: model.actDate,
            status: model.status,
            user: model.user
        }
    }

    public toModelList(values: any): Activity[] {
        const Activity: Activity[] = [];
        if (values){
            values.map((value: any) => {
                Activity.push(this.toModel(value));
            });
        }
    
        return Activity;
    }

    public toEntityList(activity: Activity[]): any[] {
        const activityEntity: any[] = [];
        activity.map((activity: Activity) => {
            activityEntity.push(this.toEntity(activity));
        });
        return activityEntity;
    }
    
}