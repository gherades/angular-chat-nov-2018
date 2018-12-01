import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Output() written = new EventEmitter();
  message = {username: '', message: ''};
  
  constructor() { }

  ngOnInit() {
  }

  sendInfo() {
    this.written.emit(this.message);
    this.message.message = '';
  }
}
