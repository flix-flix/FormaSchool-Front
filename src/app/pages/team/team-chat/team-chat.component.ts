import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/features/messages/models/message';

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.css']
})
export class TeamChatComponent implements OnInit {

  teamId: number = 0;
  salonId: number = 0;

  salons = [
    {
      id: 0, name: "Général", isSelect: true, msgs:
        [
          new Message(0, 0, new Date("2021-05-01T17:35:21"), "Salut"),
          new Message(1, 1, new Date("2021-05-01T17:37:31"), "Bien ou bien ?"),
          new Message(2, 2, new Date("2021-05-01T17:43:07"), "Hi, salut les mecs"),
          new Message(3, 3, new Date("2021-05-02T09:07:44"), "Guys ?"),

          new Message(4, 1, new Date("2021-05-02T09:07:46"), "123**456**789"),
          new Message(5, 2, new Date("2021-05-02T09:08:01"), "123**456**789**123**456"),
          new Message(6, 3, new Date("2021-05-02T09:08:27"), "text*under*text"),

          new Message(7, 0, new Date("2021-05-02T09:12:51"), "Normal\n\n**Bold**\n\n*Italic*\n\n__Under__\n\n~~Strike~~\n\n***__~~All~~__***"),
        ]
    },
    {
      id: 1, name: "Nourriture", isSelect: false, msgs: [
        new Message(10, 0, new Date("2021-05-01T17:35:21"), "Welsh"),
        new Message(11, 1, new Date("2021-05-04T09:27:07"), "Frites !"),
      ]
    },
    {
      id: 2, name: "Lorem", isSelect: false, msgs: [
        new Message(20, 0, new Date("2021-10-10T22:11:00"), `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
      Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
      
      Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.`),
      ]
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamId = +params.get("teamId");
      this.salonId = +params.get("salonId");
    });
  }

  switchToSalon = (event) => {
    console.log("chat", event);
  }
}
