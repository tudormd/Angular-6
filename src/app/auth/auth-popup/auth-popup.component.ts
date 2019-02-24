import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/providers/group-service';
import { UserService } from 'src/app/providers/user-service';
import { UserModel } from 'src/app/models/user-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ebs-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss'],
  providers: [GroupService, UserService]

})
export class AuthPopupComponent {
  groupName: string;
  groupMethods: string;
  users: UserModel[];

  constructor(private groupService: GroupService, private userService: UserService,
    public dialogRef: MatDialogRef<any>,
  ) {
    this.userService.getList().subscribe(users => {
      this.users = (<any>users).data;
    });
  }

  isSelected(date) {
    this.users.push(date.id);
  }
  addGroup() {
    this.groupService.create({ name: this.groupName, methods: this.groupMethods, users: (<UserModel[]>this.users) }).toPromise();
    this.dialogRef.close();

  }
}
