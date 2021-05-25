import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/home/login/login.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { ParametresComponent } from './pages/params/params-template/parametres.component';
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
import { PrivateMsgComponent } from './pages/home/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/home/team-select/team-select.component';
import { TeamChatComponent } from './pages/home/team/team-chat/team-chat.component';
import { TemplateComponent } from './pages/home/home-template/template.component';

const routes: Routes = [
  {
    path: "parametres", component: ParametresComponent, children: [
      { path: "addUser", component: AddUserComponent },
      { path: "addTeam", component: AddTeamComponent },
      { path: "addUserToTeam", component: AddUserToTeamComponent },
      { path: "**", redirectTo: "addUser" }
    ]
  },
  { path: "logs", component: TeamLogsComponent },
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

  {
    path: "team", component: TeamPageComponent, children: [
      { path: "teamSummary/:id", component: TeamSummaryComponent },
      { path: "teamRoles", component: TeamRolesComponent },
      { path: "teamMembers", component: TeamMembersComponent },
      { path: "teamEmojis", component: TeamEmojisComponent },
      { path: "teamLogs", component: TeamLogsComponent },
    ]
  },

  { path: "salonSummary/:id", component: SalonSummaryComponent },
  { path: "salonPermission:", component: SalonPermissionsComponent },

  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
