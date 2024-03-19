import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrl: './exo02.component.scss',
})
export class Exo02Component {
  count: number = 0;
  // timer!: ReturnType<typeof setInterval> | null;
  timer: any;
  isPaused: boolean = false;

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      if (!this.isPaused) {
        this.count++;
      }
    }, 1000);
    console.log('Timer ${this.timer} has started!');
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  reset() {
    clearInterval(this.timer);
    this.timer = null;
    this.count = 0;
  }
}
