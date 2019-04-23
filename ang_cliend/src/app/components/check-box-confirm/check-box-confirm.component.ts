import { Component, OnInit } from '@angular/core';
import { CheckBoxConfirm } from './../../services/checkboxconfirm.service';

@Component({
  selector: 'app-check-box-confirm',
  templateUrl: './check-box-confirm.component.html',
  styleUrls: ['./check-box-confirm.component.css']
})
export class CheckBoxConfirmComponent implements OnInit {
  checkboxData: any = {};
  checkboxname: any = {};
  constructor(private checkBoxConfirm: CheckBoxConfirm) {}

  ngOnInit() {
    this.checkboxData = this.checkBoxConfirm.getData();
    console.log(this.checkboxData.source.value);
    this.checkboxData.source.value.map(item => {
      this.checkboxname = item;
      console.log(this.checkboxname);
    });
  }
}
