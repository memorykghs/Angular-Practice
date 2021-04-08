import { carModel } from './../model/car.model';
import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  manufacturer: string;
  type: string;
  minPrice: number;
  price: number;
  carData: carModel; // TODO interface是這樣用的???
  carDatas = []; // TODO 可以不用宣告型別嗎?

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() { // 新增
    this.carData = { // TODO interface是這樣用的???
      manufacturer: this.manufacturer,
      type: this.type,
      minPrice: this.minPrice,
      price: this.price
    };

    console.log(this.carData);
    this.carDatas.push(this.carData);
  }

  onClear() { // 清空
    this.manufacturer = null;
    this.type = null;
    this.minPrice = null;
    this.price = null;
    this.carDatas = [];
  }

  onDelete(index: number){
    this.carDatas.splice(index, 1);
    // TODO ngFor 後面 #tEle="ngModel" 會錯
    // console.log(tElement);

  }
}
