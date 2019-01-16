import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: `<h1>Company</h1>
            <employee-list></employee-list>`,
  providers: [EmployeeService]
})

  /*templateUrl: 'app.component.html',
  template: `<h2>This style is from App/Parent component </h2>
 <!-- <label>Enter Parent AppComponent Value: </label>
  <input type="text" #pData (keyup)="0">
  <p>Value from Child Tutorial Component is: {{childData}} </p>
  <my-tutorial (childEvent)="childData=$event" [parentData]="pData.value"></my-tutorial>-->
  <my-tutorial></my-tutorial>`,*/
  /*styles:[`input.ng-invalid{border: 1px solid red;}
  input.ng-valid{border: 1px solid green;}`]*/


export class AppComponent {
 // public childData: string;
  // myName="Srini";
  /*onSubmit(value: any){
    console.log(value);
  }*/
}
