import { Component } from '@angular/core';

@Component({
  selector: 'app-comp0',
  templateUrl: './comp0.component.html',
  styleUrls: ['./comp0.component.css']
})
export class Comp0Component {
   isDarkMode: boolean = false;
  
  modenuit() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
     
      document.body.classList.add('dark-mode');
    } else {
      
      document.body.classList.remove('dark-mode');
    }
  }}
