import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-practicing',
  templateUrl: './directives-practicing.component.html',
  styleUrls: ['./directives-practicing.component.css']
})
export class DirectivesPracticingComponent {
    logEntries: Date[] = [];
    showParagraph = false;
  
    onClick() {
      this.showParagraph = !this.showParagraph;
      //this.logEntries.push(this.logEntries.length + 1);
      this.logEntries.push(new Date());
    }
  
  }


