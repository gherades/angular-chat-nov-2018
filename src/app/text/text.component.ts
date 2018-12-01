import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() username;
  @Output() written = new EventEmitter();
  message = '';
  
  constructor() { }

  ngOnInit() {
  }

  sendInfo() {
    this.written.emit({ message: this.message, username: this.username });
    this.message = '';
  }
}
