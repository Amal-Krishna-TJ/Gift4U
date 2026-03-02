import { Component } from '@angular/core';

@Component({
  selector: 'app-yes2x',
  standalone: false,
  templateUrl: './yes2x.html',
  styleUrl: './yes2x.css',
})
export class Yes2x {
  openGift() {
    const element = document.getElementById("surprise");
    if (element) {
      element.classList.add("show");
    }
  }
}
