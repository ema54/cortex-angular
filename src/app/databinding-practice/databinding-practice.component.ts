import { Component } from '@angular/core';




@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html',
  styleUrls: ['./databinding-practice.component.css']
})
export class DatabindingPracticeComponent {
  username="username";

  resetUsername():void{
    this.username="";
  }
}
