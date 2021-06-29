//imports {Component}
import { TitleH1Component } from './titles/title-h1/title-h1.component'; 
import { CardUserComponent } from './cards/card-user/card-user.component'; 

export const components: any[] = [
    CardUserComponent,
    TitleH1Component
];

//exports all component
export  * from './titles/title-h1/title-h1.component'; 
export  * from './cards/card-user/card-user.component'; 
