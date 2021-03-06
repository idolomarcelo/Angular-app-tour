import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...fromComponents.components, CardUserComponent, CarouselComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components
  ],
})
export class SharedModule { }
