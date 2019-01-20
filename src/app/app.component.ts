import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl:'./app.component.html'
})
export class AppComponent  {
  name = 'Hitzz';
  private username:string = 'Test';
  private currentUser:User ={username:'Test',email:'test@test.com'}

  private getUsername():string{
    return this.currentUser.username
  }
}
interface User{
  username:string,
  email:string
}
