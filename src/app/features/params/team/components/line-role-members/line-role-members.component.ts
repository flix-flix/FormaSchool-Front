import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/features/roles/models/role';
import { RoleService } from 'src/app/features/roles/services/role.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-line-role-members',
  templateUrl: './line-role-members.component.html',
  styleUrls: ['./line-role-members.component.css']
})
export class LineRoleMembersComponent implements OnInit {

  @Input() role: Role;


  constructor(private roleService: RoleService, private teamService: TeamService) {
  }

  ngOnInit(): void {

  }
  /**
   * This function refresh the page with the role choosen
   * @param id the id of the role choosen
   */
  roleChoosen = (id: number) => {
    let newRole: Role = this.roleService.findRoleById(id);
    this.role = newRole;
  }

}
