import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-practicing',
  templateUrl: './directives-practicing.component.html',
  styleUrls: ['./directives-practicing.component.css']
})
export class DirectivesPracticingComponent {
    logEntries: number[] = [];
    showParagraph = false;
  
    onClick(): void {
      this.showParagraph = true;
      const logEntry = this.logEntries.length + 1;
      this.logEntries.push(logEntry);
      console.log(logEntry);
    }
  
  }


