import { Component, OnInit } from '@angular/core';
import { UsersData } from '@data/constants/user.const';
import { IcardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

public users: IcardUser[] = UsersData;

  constructor() { }

  ngOnInit(): void {
  }     

}
