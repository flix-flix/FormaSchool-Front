import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSalonFormComponent } from './components/params/salon/update-salon-form/update-salon-form.component';
import { UpdateTeamFormComponent } from './components/params/team/update-team-form/update-team-form.component';
import { TemplateComponent } from './pages/home/home-template/template.component';
import { LoginComponent } from './pages/home/login/login.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { PrivateMsgComponent } from './pages/home/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/home/team-select/team-select.component';
import { TeamChatComponent } from './pages/home/team/team-chat/team-chat.component';
import { AddTeamComponent } from './pages/params/admin/add-team/add-team.component';
import { AddUserToTeamComponent } from './pages/params/admin/add-user-to-team/add-user-to-team.component';
import { AddUserComponent } from './pages/params/admin/add-user/add-user.component';
import { AdminEmojisComponent } from './pages/params/admin/admin-emojis/admin-emojis.component';
import { AdminLogsComponent } from './pages/params/admin/admin-logs/admin-logs.component';
import { ParamsTemplateComponent } from './pages/params/params-template/params-template.component';
import { SalonPermissionsComponent } from './pages/params/salon/salon-permissions/salon-permissions.component';
import { SalonSummaryComponent } from './pages/params/salon/salon-summary/salon-summary.component';
import { TeamEmojisComponent } from './pages/params/team/team-emojis/team-emojis.component';
import { TeamLogsComponent } from './pages/params/team/team-logs/team-logs.component';
import { TeamMembersComponent } from './pages/params/team/team-members/team-members.component';
import { TeamRolesComponent } from './pages/params/team/team-roles/team-roles.component';
import { TeamSummaryComponent } from './pages/params/team/team-summary/team-summary.component';
import { UserIdentityComponent } from './pages/params/user/user-identity/user-identity.component';
import { UserPasswordComponent } from './pages/params/user/user-password/user-password.component';


const routes: Routes = [
  {
    path: "", component: TemplateComponent, children: [
      { path: "login", component: LoginComponent },

      // TODO === guard login ===
      { path: "privateMessages/:salonId", component: PrivateMsgComponent },

      { path: "teamSelect", component: TeamSelectComponent },
      { path: "teamMessages/:teamId/:salonId", component: TeamChatComponent },
      { path: "teamMessages/:teamId", redirectTo: "teamMessages/:teamId/redirect" },

      { path: "404", component: NotFoundComponent },

      // TODO redirectTo: lastVisitedPage
      { path: "", redirectTo: "teamSelect", pathMatch: "full" },
    ]
  },

  {
    path: "params", children: [
      {
        path: "admin", component: ParamsTemplateComponent, children: [
          { path: "createUser", component: AddUserComponent },
          { path: "createTeam", component: AddTeamComponent },
          { path: "addUserToTeam", component: AddUserToTeamComponent },
          { path: "adminLogs", component: AdminLogsComponent },
          { path: "adminEmojis", component: AdminEmojisComponent },
          { path: "**", redirectTo: "createUser" }
        ]
      },
      {
        path: "team/:teamId", component: ParamsTemplateComponent, children: [
          { path: "roles", component: TeamRolesComponent },
          { path: "members", component: TeamMembersComponent },
          { path: "emojis", component: TeamEmojisComponent },
          { path: "logs", component: TeamLogsComponent },
          { path: "summary", component: TeamSummaryComponent },
          { path: "summaryUpdate", component: UpdateTeamFormComponent },
          { path: "**", redirectTo: "summary" }
        ]
      },
      {
        path: "salon/:salonId", component: ParamsTemplateComponent, children: [
          { path: "summary", component: SalonSummaryComponent },
          { path: "summaryUpdate", component: UpdateSalonFormComponent },
          { path: "permissions", component: SalonPermissionsComponent },
          { path: "**", redirectTo: "summary" }
        ]
      },
      {
        path: "user/:userId", component: ParamsTemplateComponent, children: [
          { path: "general", component: UserIdentityComponent },
          { path: "password", component: UserPasswordComponent },
          // { path: "additional", component: SalonPermissionsComponent },
          // { path: "files", component: SalonPermissionsComponent },
          { path: "**", redirectTo: "general" }
        ]
      }
    ]
  },

  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
