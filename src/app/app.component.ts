import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  a!:string;
b!:string;
selectedDay: string = '';

//event handler for the select element's change event
selectChangeHandler (event: any) {
  //update the ui
  this.selectedDay = event.target.value;
}
}
