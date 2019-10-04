import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myvariable="mayank"
  bitwiseor=2|5
  constructor() { }

  ngOnInit() {
  }

}
