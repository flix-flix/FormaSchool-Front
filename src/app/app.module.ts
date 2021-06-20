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
import { HeaderComponent } from './features/global/header/header.component';
import { ProfilComponent } from './features/global/profil/profil.component';
import { SidebarComponent } from './features/global/sidebar/sidebar.component';
import { EmojiComponent } from './features/messages/components/emoji/emoji.component';
import { LineDateComponent } from './features/messages/components/line-date/line-date.component';
import { MessageComponent } from './features/messages/components/message/message.component';
import { MsgThreadComponent } from './features/messages/components/msg-thread/msg-thread.component';
import { MsgWriterComponent } from './features/messages/components/msg-writer/msg-writer.component';
import { SharedFileComponent } from './features/messages/components/shared-file/shared-file.component';
import { SidebarAdminComponent } from './features/params/admin/components/sidebar-admin/sidebar-admin.component';
import { DialogPermissionComponent } from './features/params/salon/components/dialog-permission/dialog-permission.component';
import { SalonSidebarComponent } from './features/params/salon/components/salon-sidebar/salon-sidebar.component';
import { UpdateSalonFormComponent } from './features/params/salon/update-salon-form/update-salon-form.component';
import { LineUserMembersComponent } from './features/params/team/components/line-user-members/line-user-members.component';
import { RightsComponent } from './features/params/team/components/rights/rights.component';
import { TeamSidebarComponent } from './features/params/team/components/team-sidebar/team-sidebar.component';
import { UpdateTeamFormComponent } from './features/params/team/components/update-team-form/update-team-form.component';
import TabEmojiComponent from './features/params/team/emojis/components/tab-emoji/tab-emoji.component';
import { ListLogComponent } from './features/params/team/logs/components/list-log/list-log.component';
import { LogEmojiComponent } from './features/params/team/logs/components/log-emoji/log-emoji.component';
import { LogPinComponent } from './features/params/team/logs/components/log-pin/log-pin.component';
import { LogSalonComponent } from './features/params/team/logs/components/log-salon/log-salon.component';
import { LogTeamComponent } from './features/params/team/logs/components/log-team/log-team.component';
import { LogUserComponent } from './features/params/team/logs/components/log-user/log-user.component';
import { LogComponent } from './features/params/team/logs/components/log/log.component';
import { SalonButtonComponent } from './features/team/components/salon-button/salon-button.component';
import { TeamMenuComponent } from './features/team/components/team-menu/team-menu.component';
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
import { UserIdentityComponent } from './pages/params/user/user-identity/user-identity.component';


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
    UserIdentityComponent,
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
