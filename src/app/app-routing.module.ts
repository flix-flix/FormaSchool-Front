import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivateMsgComponent } from './pages/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/team-select/team-select.component';

const routes: Routes = [
  { path: "privateMessages", component: PrivateMsgComponent },
  { path: "teamSelect", component: TeamSelectComponent },

  { path: "teamMessages/:idTeam/:idSalon", component: PrivateMsgComponent },


  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
