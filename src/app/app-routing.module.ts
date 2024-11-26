import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activities/activity.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'activity/:idUser', component: ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
