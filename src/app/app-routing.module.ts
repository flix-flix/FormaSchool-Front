import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AddTeamComponent } from './pages/params/admin/add-team/add-team.component';
import { AddUserToTeamComponent } from './pages/params/admin/add-user-to-team/add-user-to-team.component';
import { AddUserComponent } from './pages/params/admin/add-user/add-user.component';
import { SalonPermissionsComponent } from './pages/params/salon/salon-permissions/salon-permissions.component';
import { SalonSummaryComponent } from './pages/params/salon/salon-summary/salon-summary.component';
import { TeamEmojisComponent } from './pages/params/team/team-emojis/team-emojis.component';
import { TeamLogsComponent } from './pages/params/team/team-logs/team-logs.component';
import { TeamMembersComponent } from './pages/params/team/team-members/team-members.component';
import { TeamPageComponent } from './pages/params/team/team-page/team-page.component';
import { TeamRolesComponent } from './pages/params/team/team-roles/team-roles.component';
import { TeamSummaryComponent } from './pages/params/team/team-summary/team-summary.component';
import { PrivateMsgComponent } from './pages/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/team-select/team-select.component';
import { TeamChatComponent } from './pages/team/team-chat/team-chat.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path: "parametres", component: ParametresComponent, children: [
      { path: "addUser", component: AddUserComponent },
      { path: "addTeam", component: AddTeamComponent },
      { path: "addUserToTeam", component: AddUserToTeamComponent },
      { path: "**", redirectTo: "addUser" }
    ]
  },

  {
    path: "home", component: TemplateComponent, children: [
      { path: "teamSelect", component: TeamSelectComponent },
      { path: "teamMessages/:idTeam/:idSalon", component: TeamChatComponent },
      { path: "privateMessages", component: PrivateMsgComponent },
      

    ]
  },

  {
    path: "team", component: TeamPageComponent, children: [
      {path : "teamSummary/:id" ,component : TeamSummaryComponent},
      {path : "teamRoles" ,component : TeamRolesComponent},
      {path : "teamMembers" ,component : TeamMembersComponent},
      {path : "teamEmojis" ,component : TeamEmojisComponent},
      {path : "teamLogs" ,component : TeamLogsComponent},
         ]
  },
  {path : "salonSummary/:id" ,component : SalonSummaryComponent},
  {path : "salonPermission:" ,component : SalonPermissionsComponent},

  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
