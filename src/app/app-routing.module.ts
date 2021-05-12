import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AddTeamComponent } from './pages/params/admin/add-team/add-team.component';
import { PrivateMsgComponent } from './pages/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/team-select/team-select.component';
import { TeamChatComponent } from './pages/team/team-chat/team-chat.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path: "parametres", component: ParametresComponent, children: [
      { path: "addTeam", component: AddTeamComponent }
    ]
  },

  {
    path: "home", component: TemplateComponent, children: [
      { path: "teamSelect", component: TeamSelectComponent },
      { path: "teamMessages/:idTeam/:idSalon", component: TeamChatComponent },
      { path: "privateMessages", component: PrivateMsgComponent },
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
