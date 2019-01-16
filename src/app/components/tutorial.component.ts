import {Component} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h3>{{title}}</h3>
  <!--<img [src]="imgLink">
  &lt;!&ndash;class binding and style binding&ndash;&gt;
  <div [class.myClass]="applyClass">Apply class</div>
  <div [style.color]="applyBlue ? 'blue' : 'orange'">This is style binding!</div>
  <input type="text" #demoInput>
  <button (click)="onClick()">Click me!!</button>
  <button (mouseout)="onClick(demoInput.value)">Click me
  </button> &lt;!&ndash;is referenced by input ref value for data binding&ndash;&gt;
  <button (mouseout)="onClick($event)">Click me!!</button> <br/> &lt;!&ndash;gives all information of partucular event&ndash;&gt;
  <input type="text" [(ngModel)]="fName">
  <input type="text" [(ngModel)]="lName">
  FullName: {{fName}} {{lName}}
    &lt;!&ndash;Structural directives&ndash;&gt;
  <p *ngIf="showElement"> ngIf Show Element</p>
  <div [ngSwitch]="case">
    <p *ngSwitchCase="'red'"> Red color is shown</p>
    <p *ngSwitchCase="'blue'"> Blue color is shown</p>
    <p *ngSwitchCase="'green'"> Green color is shown</p>
    <p *ngSwitchDefault>Invalid color</p>
  </div>
  <ul>
    <li *ngFor="let color of colors">{{color}}</li>
  </ul>
  &lt;!&ndash;Attribute directives&ndash;&gt;
  <p [ngClass]="{classOne:cone, classTwo:ctwo}"> NgClass Paragraph</p> 
  <button (click)="toggle()">Toggle</button>
  <p [ngStyle]="{'font-style':style, 'font-size':size}">NgStyle Paragraph</p>
  &lt;!&ndash;Input and Output&ndash;&gt;
  <label>Enter Child Tutorial Component Value: </label>
  <input type="text" #childText (keyup)="onChange(childText.value)">
  <p>Value from Parent App Component is: {{parentData}} </p>
  <h3>{{title | uppercase}}</h3>
  <h3>{{title | lowercase}}</h3>
  <h3>{{title | slice:'2':'16'}}</h3>
  <h3>{{5.978}}</h3>
  <h3>{{5.978 | number:'1.2-3'}}</h3>
  <h3>{{5.978 | number:'1.2-4'}}</h3>
  <h3>{{5.978 | number:'2.2-2'}}</h3>
  <h3>{{5.978 | currency: 'USD'}}</h3>
  <h3>{{date}}</h3>
  <h3>{{date | date:'fullDate'}}</h3>
  <h3>{{date | date:'shortDate'}}</h3>
  <h3>{{date | date:'mediumTime'}}</h3>
  <h3>{{date | date:'shortTime'}}</h3>-->`,
  inputs:[`parentData`],
  outputs:[`childEvent`],

  styles: [`.classOne{color: yellow;}
            .classTwo{background-color: green}`]
})
export class TutorialComponent {
  public title = "This style is from Tutorial/Child Component";


  /*public imgLink = "http://lorempixel.com/200/100";
  public applyClass = true;
  public applyBlue = false;
  public fName;
  public lName;
  public showElement = true;
  public case = 'red';
  public colors = ['red', 'green', 'blue'];

  onClick() {
    console.log("button clicked");
  }

  onClick(value) {
    console.log(value);
  }
  public cone=true;
  public ctwo=true;
  public style='italic';
  public size='30px';
  toggle(){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
    this.style= 'bold';
    this.size='50px';
  }
  public parentData: string;
  childEvent = new EventEmitter<string>();
  onChange(value:string){
    this.childEvent.emit(value);
  }
  date = new Date();
  */
}
