import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('control') control;
  // tslint:disable-next-line:no-input-rename
  @Input('name-control') controlName;
  constructor() { }
  get message() {
    // console.log(this.controlName);
    // console.log(this.control);
    for (const err in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMsg(err, this.control.errors[err]);
      }
    }
    return null;
  }

  getErrorMsg(err, value) {
    const messages = {
      required: `${this.controlName} Không được bỏ trống`,
      minlength: `${this.controlName} ít nhất là ${value.requiredLength} ký tự`,
      maxlength: `${this.controlName} nhiều nhất là ${value.requiredLength} ký tự`,
      email: `${this.controlName} điền đúng định dạng Email`
    };
    return messages[err];
  }
  ngOnInit() { }
}
