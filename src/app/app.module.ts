import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxStompService } from '@stomp/ng2-stompjs';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { ProfilComponent } from './components/global/profil/profil.component';
import { SidebarComponent } from './components/global/sidebar/sidebar.component';
import { EmojiComponent } from './components/messages/emoji/emoji.component';
import { LineDateComponent } from './components/messages/line-date/line-date.component';
import { MessageComponent } from './components/messages/message/message.component';
import { MsgThreadComponent } from './components/messages/msg-thread/msg-thread.component';
import { MsgWriterComponent } from './components/messages/msg-writer/msg-writer.component';
import { SharedFileComponent } from './components/messages/shared-file/shared-file.component';
import { SidebarAdminComponent } from './components/params/admin/sidebar-admin/sidebar-admin.component';
import { DialogPermissionComponent } from './components/params/salon/dialog-permission/dialog-permission.component';
import { SalonSidebarComponent } from './components/params/salon/salon-sidebar/salon-sidebar.component';
import { UpdateSalonFormComponent } from './components/params/salon/update-salon-form/update-salon-form.component';
import { LineUserMembersComponent } from './components/params/team/members/line-user-members/line-user-members.component';
import { RightsComponent } from './components/params/team/roles/rights/rights.component';
import { TeamSidebarComponent } from './components/params/team/team-sidebar/team-sidebar.component';
import { UpdateTeamFormComponent } from './components/params/team/update-team-form/update-team-form.component';
import TabEmojiComponent from './components/params/team/emojis/tab-emoji/tab-emoji.component';
import { ListLogComponent } from './components/params/team/logs/list-log/list-log.component';
import { LogEmojiComponent } from './components/params/team/logs/log-emoji/log-emoji.component';
import { LogPinComponent } from './components/params/team/logs/log-pin/log-pin.component';
import { LogSalonComponent } from './components/params/team/logs/log-salon/log-salon.component';
import { LogTeamComponent } from './components/params/team/logs/log-team/log-team.component';
import { LogUserComponent } from './components/params/team/logs/log-user/log-user.component';
import { LogComponent } from './components/params/team/logs/log/log.component';
import { SalonButtonComponent } from './components/team/salon-button/salon-button.component';
import { TeamMenuComponent } from './components/team/team-menu/team-menu.component';
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
import { ParamsAdminTemplateComponent } from './pages/params/admin/admin-template/parametres.component';
import { SalonPermissionsComponent } from './pages/params/salon/salon-permissions/salon-permissions.component';
import { SalonSummaryComponent } from './pages/params/salon/salon-summary/salon-summary.component';
import { ParamsSalonTemplateComponent } from './pages/params/salon/salon-template/salon-template.component';
import { TeamEmojisComponent } from './pages/params/team/team-emojis/team-emojis.component';
import { TeamLogsComponent } from './pages/params/team/team-logs/team-logs.component';
import { TeamMembersComponent } from './pages/params/team/team-members/team-members.component';
import { TeamRolesComponent } from './pages/params/team/team-roles/team-roles.component';
import { TeamSummaryComponent } from './pages/params/team/team-summary/team-summary.component';
import { ParamsTeamTemplateComponent } from './pages/params/team/team-template/team-page.component';


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
    MsgWriterComponent,
    TeamRolesComponent,
    ParamsSalonTemplateComponent,
    EmojiComponent,
    ListLogComponent,
    TabEmojiComponent,
    SharedFileComponent,
    AdminLogsComponent,
    AdminEmojisComponent,
    LogEmojiComponent,
    LogSalonComponent,
    LogPinComponent,
    LogUserComponent,
    LogTeamComponent,
    LogComponent,
    UpdateTeamFormComponent,
    RightsComponent,
    UpdateSalonFormComponent,
    DialogPermissionComponent
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
    ConfirmDialogModule,
    DropdownModule
  ],
  providers: [RxStompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
