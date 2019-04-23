import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../services/token.service';

// checkBox
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { CheckBoxConfirm } from './../../services/checkboxconfirm.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  public token: string;
  public checkBoxForm: FormGroup;
  checkBoxFormArr: Array<any> = [];
  checkBoxOrders = [
    { name: '仮想通貨取引', id: 1 },
    { name: '先物取引', id: 2 },
    { name: 'FX取引', id: 3 },
    { name: 'デリバティブ取引', id: 4 },
    { name: '株式取引', id: 5 },
    { name: '投資信託', id: 6 },
    { name: '債券取引', id: 7 },
    { name: '商品取引', id: 8 },
    { name: '信用取引', id: 9 }
  ];

  constructor(
    private tokenService: TokenService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private checkBoxConfirm: CheckBoxConfirm
  ) {}

  ngOnInit() {
    this.token = this.tokenService.GetToken();
    // console.log(this.token);
    this.checkBoxForm = this.formBuilder.group({
      checkBoxOrders: []
    });
  }

  addCheckBoxs(item, isChecked: boolean) {
    if (isChecked) {
      this.checkBoxFormArr.push(item);
    } else {
      const index = this.checkBoxFormArr.indexOf(item);
      this.checkBoxFormArr.splice(index, 1);
    }
  }

  checkBoxSubmit() {
    // let array = [];
    // for (let i = 0; i < this.checkBoxFormArr.length; i++) {
    //   const item = this.checkBoxFormArr[i];
    //   array.push(item.id);
    // }
    // let id = array.join(',');
    // const data1 = JSON.stringify({ id: id });
    // // console.log(data1);
    // this.checkBoxConfirm.pushData(data1);
    // this.router.navigate(['checkbox-confirm']);
    console.log(this.checkBoxFormArr);
    let data = this.checkBoxFormArr;
    this.checkBoxConfirm.pushData(data);
    this.router.navigate(['checkbox-confirm']);
  }
}
