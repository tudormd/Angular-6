import { Component, OnInit } from '@angular/core';
import { GroupService } from '../providers/group-service';
import { GroupModel } from '../models/group-model';

@Component({
  selector: 'ebs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [GroupService]
})
export class DashboardComponent implements OnInit {
  dataSource: GroupModel[];

  constructor(private groupService: GroupService) {
    this.groupService.getList().subscribe(data => {
      this.dataSource = data;
    })

  }

  ngOnInit() {
  }

}
