import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.css"]
})
export class InputFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Input() eventName: string;

  // @Input() clickAction: string;
  //   @Output() clickEvent: EventEmitter<any> = new EventEmitter();
  //   constructor() { }

  //   ngOnInit() {
  //   }

  //   clickable() {
  //     return false;
  //   }

  //   clicked() {
  //     //alert(this.clickAction);
  //     this.clickEvent.emit(this.clickAction);
  //     // if (this.clickAction) {
  //     //   this.clickEvent.emit(this.clickAction );
  //     // } else {
  //     //   this.clickEvent.emit();
  //     // }
  //   }

  constructor() {}

  ngOnInit() {}
}
