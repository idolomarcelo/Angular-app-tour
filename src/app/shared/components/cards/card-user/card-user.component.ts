import { Component, OnInit, Input } from '@angular/core';
import { IcardUser } from './icard-user.metadata';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
@Input() data: IcardUser = {id:0, avatar:'', name:'', age:0, description:''};

  constructor() { }

  ngOnInit(): void {
  }

}
