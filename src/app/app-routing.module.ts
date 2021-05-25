import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/home/login/login.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { ParamsAdminTemplateComponent } from './pages/params/admin/admin-template/parametres.component';
import { AddTeamComponent } from './pages/params/admin/add-team/add-team.component';
import { AddUserToTeamComponent } from './pages/params/admin/add-user-to-team/add-user-to-team.component';
import { AddUserComponent } from './pages/params/admin/add-user/add-user.component';
import { SalonPermissionsComponent } from './pages/params/salon/salon-permissions/salon-permissions.component';
import { SalonSummaryComponent } from './pages/params/salon/salon-summary/salon-summary.component';
import { TeamEmojisComponent } from './pages/params/team/team-emojis/team-emojis.component';
import { TeamLogsComponent } from './pages/params/team/team-logs/team-logs.component';
import { TeamMembersComponent } from './pages/params/team/team-members/team-members.component';
import { ParamsTeamTemplateComponent } from './pages/params/team/team-template/team-page.component';
import { TeamRolesComponent } from './pages/params/team/team-roles/team-roles.component';
import { TeamSummaryComponent } from './pages/params/team/team-summary/team-summary.component';
import { PrivateMsgComponent } from './pages/home/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/home/team-select/team-select.component';
import { TeamChatComponent } from './pages/home/team/team-chat/team-chat.component';
import { TemplateComponent } from './pages/home/home-template/template.component';
import { ParamsSalonTemplateComponent } from './pages/params/salon/salon-template/salon-template.component';

const routes: Routes = [
  {
    path: "", component: TemplateComponent, children: [
      { path: "teamSelect", component: TeamSelectComponent },
      { path: "teamMessages/:teamId/:salonId", component: TeamChatComponent },
      { path: "privateMessages", component: PrivateMsgComponent },

      { path: "404", component: NotFoundComponent },
      { path: "login", component: LoginComponent },

      // TODO redirectTo: lastVisitedPage (+guard login)
      { path: "", redirectTo: "teamMessages/1/1", pathMatch: "full" },
    ]
  },

  // TODO Add path params
  // {path: "params", component: ParamsTemplateComponent, children: [
  {
    path: "admin", component: ParamsAdminTemplateComponent, children: [
      { path: "addUser", component: AddUserComponent },
      { path: "addTeam", component: AddTeamComponent },
      { path: "addUserToTeam", component: AddUserToTeamComponent },
      { path: "**", redirectTo: "addUser" }
    ]
  },
  {
    path: "team", component: ParamsTeamTemplateComponent, children: [
      { path: "teamSummary/:id", component: TeamSummaryComponent },
      { path: "teamRoles", component: TeamRolesComponent },
      { path: "teamMembers", component: TeamMembersComponent },
      { path: "teamEmojis", component: TeamEmojisComponent },
      { path: "teamLogs", component: TeamLogsComponent },
    ]
  },
  {
    path: "salon", component: ParamsSalonTemplateComponent, children: [
      { path: "salonSummary/:id", component: SalonSummaryComponent },
      { path: "salonPermission:", component: SalonPermissionsComponent },
    ]
  },
  // ]},

  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
