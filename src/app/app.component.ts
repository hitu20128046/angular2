import { Component } from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'my-app',
   // template: `<h1>Hello {{name}}</h1>`,
  templateUrl:'./app.component.html',
  // styles: ['.blue-bg{background-color:blue;}']

})
export class AppComponent {
  private _account:Array<Account>=[
    {
      id:1,
      title:"SBI Bank",
      description:"SBI main account",
      balance:5900000
    },
    new Account(2,"HDFC Bank","Saving Accont",234578)
  ]

  private _nextId = 3

  private creatAcc(titleE1:any, descE1:any ,balE1:any){
    this._account.push(new Account(
                              this._nextId,
                              titleE1.value,
                              descE1.value,
                              balE1.value
                            ))
      this._nextId++

      titleE1.value=""
      descE1.value=""
      balE1.value=0

  }
  private removeAcc(index:number){
    this._account.splice(index,1)
  }
}
