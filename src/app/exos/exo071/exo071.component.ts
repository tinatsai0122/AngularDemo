import { Component } from '@angular/core';

@Component({
  selector: 'app-exo071',
  templateUrl: './exo071.component.html',
  styleUrl: './exo071.component.scss',
})
export class Exo071Component {
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
