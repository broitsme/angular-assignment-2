import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user;
  styleActive : Object = {'border-radius': '5px','position':'relative', 'border': '2px solid green', 'height':'100px', 'width':'90%','padding':'10px','margin':'10px'};
  styleDeactive : Object = {'border-radius': '5px','position':'relative','border': '2px solid red', 'height':'100px', 'width':'90%','padding':'10px','margin':'10px'};
  buttonStyle : Object = {'margin': '15px','position': 'absolute','right':'0','bottom':'0'};
}

