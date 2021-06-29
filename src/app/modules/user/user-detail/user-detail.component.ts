import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersData } from '@data/constants/user.const';
import { IcardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent  {

public users: IcardUser[]= UsersData;
public id: number;
public currentUser: IcardUser;

  constructor(
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    this.currentUser = this.users.find(user => user.id === +this.id)!;  //+ importante para definir como numero a un string 
    //! que no no es nulo sino no compila
    console.log(this.currentUser);
   }

}
