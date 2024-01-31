// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   fullName: string = ' ';
  displayFullName(firstName: any,lastName: any) {
    this.fullName = `${firstName} ${lastName}`;
  }
}
