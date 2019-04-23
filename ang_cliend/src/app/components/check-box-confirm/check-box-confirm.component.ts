import { Component, OnInit } from '@angular/core';
import { CheckBoxConfirm } from './../../services/checkboxconfirm.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-check-box-confirm',
  templateUrl: './check-box-confirm.component.html',
  styleUrls: ['./check-box-confirm.component.css']
})
export class CheckBoxConfirmComponent implements OnInit {
  checkboxData: any = {};
  checkboxname: Array<any> = [];
  confirmForm: FormGroup;

  constructor(
    private checkBoxConfirm: CheckBoxConfirm,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.checkboxData = this.checkBoxConfirm.getData();
    // console.log(this.checkboxData);
    // console.log(this.checkboxData.source.value);
    this.checkboxname = this.checkboxData.source.value;
    console.log(this.checkboxname);
    this.confirmForm = this.formBuilder.group({
      checkboxname: []
    });
  }
  confirmSubmit() {
    let dataID = this.checkboxname.map(item => {
      return item.id;
    });
    // .toString();
    console.log(dataID);
    this.authenticationService.checkBoxSubmit(dataID).subscribe(data => {
      console.log('123' + data);
    });
  }
  backCheckBox() {}
}
