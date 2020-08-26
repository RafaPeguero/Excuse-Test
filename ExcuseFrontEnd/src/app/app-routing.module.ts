import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcusesListComponent } from './excuses-list/excuses-list.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "Excusas",
    pathMatch: "full"
  },
  { path: "Excusas", component: ExcusesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
