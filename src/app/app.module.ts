import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/global/sidebar/sidebar.component';
import { HeaderComponent } from './components/global/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivateMsgComponent } from './pages/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/team-select/team-select.component';
import { TeamChatComponent } from './pages/team/team-chat/team-chat.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamSummaryComponent } from './pages/params/team/team-summary/team-summary.component';
import { TeamRolesComponent } from './pages/params/team/team-roles/team-roles.component';
import { TeamMembersComponent } from './pages/params/team/team-members/team-members.component';
import { TeamEmojisComponent } from './pages/params/team/team-emojis/team-emojis.component';
import { TeamLogsComponent } from './pages/params/team/team-logs/team-logs.component';
import { SalonSummaryComponent } from './pages/params/salon/salon-summary/salon-summary.component';
import { SalonPermissionsComponent } from './pages/params/salon/salon-permissions/salon-permissions.component';
import { AddTeamComponent } from './pages/params/admin/add-team/add-team.component';
import { AddUserComponent } from './pages/params/admin/add-user/add-user.component';
import { SidebarAdminComponent } from './components/superAdmin/sidebar-admin/sidebar-admin.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { TemplateComponent } from './pages/template/template.component';
import { ProfilComponent } from './components/global/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    NotFoundComponent,
    PrivateMsgComponent,
    TeamSelectComponent,
    TeamChatComponent,
    LoginComponent,
    TeamSummaryComponent,
    TeamRolesComponent,
    TeamMembersComponent,
    TeamEmojisComponent,
    TeamLogsComponent,
    SalonSummaryComponent,
    SalonPermissionsComponent,
    AddTeamComponent,
    AddUserComponent,
    SidebarAdminComponent,
    ParametresComponent,
    TemplateComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
