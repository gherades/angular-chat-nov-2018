import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Output() written = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendInfo(value) {
    this.written.emit(value.value);
  }
}
