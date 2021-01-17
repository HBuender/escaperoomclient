import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RiddleComponent} from './riddle/riddle.component';

const routes: Routes = [
  { path: 'riddle', component: RiddleComponent },
  { path: '',   redirectTo: '/riddle', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
