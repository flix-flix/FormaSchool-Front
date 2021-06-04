import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './features/global/sidebar/sidebar.component';
import { HeaderComponent } from './features/global/header/header.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { PrivateMsgComponent } from './pages/home/private-msg/private-msg.component';
import { TeamSelectComponent } from './pages/home/team-select/team-select.component';
import { TeamChatComponent } from './pages/home/team/team-chat/team-chat.component';
import { LoginComponent } from './pages/home/login/login.component';
import { TeamSummaryComponent } from './pages/params/team/team-summary/team-summary.component';
import { TeamRolesComponent } from './pages/params/team/team-roles/team-roles.component';
import { TeamMembersComponent } from './pages/params/team/team-members/team-members.component';
import { TeamEmojisComponent } from './pages/params/team/team-emojis/team-emojis.component';
import { TeamLogsComponent } from './pages/params/team/team-logs/team-logs.component';
import { SalonSummaryComponent } from './pages/params/salon/salon-summary/salon-summary.component';
import { SalonPermissionsComponent } from './pages/params/salon/salon-permissions/salon-permissions.component';
import { AddTeamComponent } from './pages/params/admin/add-team/add-team.component';
import { AddUserComponent } from './pages/params/admin/add-user/add-user.component';
import { SidebarAdminComponent } from './features/params/admin/components/sidebar-admin/sidebar-admin.component';
import { ParamsAdminTemplateComponent } from './pages/params/admin/admin-template/parametres.component';
import { TemplateComponent } from './pages/home/home-template/template.component';
import { ProfilComponent } from './features/global/profil/profil.component';
import { TeamMenuComponent } from './features/team/components/team-menu/team-menu.component';
import { SalonButtonComponent } from './features/team/components/salon-button/salon-button.component';
import { MessageComponent } from './features/messages/components/message/message.component';
import { LineDateComponent } from './features/messages/components/line-date/line-date.component';
import { MsgThreadComponent } from './features/messages/components/msg-thread/msg-thread.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { AddUserToTeamComponent } from './pages/params/admin/add-user-to-team/add-user-to-team.component';
import { ParamsTeamTemplateComponent } from './pages/params/team/team-template/team-page.component'
import { TeamSidebarComponent } from './features/params/team/components/team-sidebar/team-sidebar.component';
import { SalonSidebarComponent } from './features/params/salon/components/salon-sidebar/salon-sidebar.component';
import { LineUserMembersComponent } from './features/params/team/components/line-user-members/line-user-members.component';
import { LineRoleMembersComponent } from './features/params/team/components/line-role-members/line-role-members.component';
import { ListboxModule } from 'primeng/listbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MsgWriterComponent } from './features/messages/components/msg-writer/msg-writer.component';
import { PanelModule } from 'primeng/panel';
import { ParamsSalonTemplateComponent } from './pages/params/salon/salon-template/salon-template.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EmojiComponent } from './features/messages/components/emoji/emoji.component';
import { LogComponent } from './features/params/team/logs/components/log/log.component';
import { ListLogComponent } from './features/params/team/logs/components/list-log/list-log.component';
import TabEmojiComponent from './features/params/team/emojis/components/tab-emoji/tab-emoji.component';

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
    ParamsAdminTemplateComponent,
    TemplateComponent,
    ProfilComponent,
    TeamMenuComponent,
    SalonButtonComponent,
    MessageComponent,
    LineDateComponent,
    MsgThreadComponent,
    AddUserToTeamComponent,
    ParamsTeamTemplateComponent,
    TeamSidebarComponent,
    SalonSidebarComponent,
    LineUserMembersComponent,
    LineRoleMembersComponent,
    MsgWriterComponent,
    TeamRolesComponent,
    ParamsSalonTemplateComponent,
    EmojiComponent,
    LogComponent,
    ListLogComponent,
    TabEmojiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule,
    InputTextareaModule,
    HttpClientModule,
    ButtonModule,
    ListboxModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    PanelModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
