import { Component, OnInit } from "@angular/core";
import {
  style,
  state,
  trigger,
  transition,
  animate
} from "@angular/animations";
import { timer } from "rxjs";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
  animations: [
    trigger("work-break", [
      state(
        "doing",
        style({ opacity: 1, background: "skyblue", color: "#fff" })
      ),
      state("not-doing", style({ background: "#fff" }))
    ])
  ]
})
export class ProgressComponent implements OnInit {
  task = "";
  percent: number;
  clock: any = 0;
  hgt: any;

  constructor() {}
  start(min) {
    min = min / 60;
    this.clock = timer(1000, min).subscribe(val => {
      this.percent = Math.floor((val / 60) * 100);
      this.hgt = this.percent + "%";
      console.log(this.percent);

      if (val == 60) this.clock.complete();
    });
  }
  startBreak() {
    this.task = "break";
    let min = 5 * 60 * 100;
    if (this.clock != 0) this.clock.complete();
    this.start(min);
  }
  startWork() {
    this.task = "work";
    let min = 20 * 60 * 1000;
    if (this.clock != 0) this.clock.complete();
    this.start(min);
  }

  ngOnInit() {}
}
