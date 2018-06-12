import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef } from '@angular/core';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // @ViewChild('CockpitComponent') cockpitComponent; // selects the whole component template

  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {    
    this.serverCreated.emit({
      name: nameInput.value, // local reference 
      content: this.serverContentInput.nativeElement.value // viewChild reference
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

}
