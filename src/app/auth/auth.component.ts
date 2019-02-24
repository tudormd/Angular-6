import { Component, OnInit } from '@angular/core';
import { GroupService } from '../providers/group-service';
import { GroupModel } from '../models/group-model';
import { MatDialog } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';

@Component({
  selector: 'ebs-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [GroupService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AuthComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'methods', 'createdAt', 'updatedAt'];

  dataSource: GroupModel[];

  constructor(
    private groupService: GroupService,
    public dialog: MatDialog,

  ) {
    this.groupService.getList().subscribe((group: GroupModel[]) => {
      this.dataSource = (<GroupModel>group).data;
    });
  }


  ngOnInit() {
  }
  getDialogRef() {
    return this.dialog.open(AuthPopupComponent, {
      width: '750px',
    });
  }
}
