import { Component, OnInit } from '@angular/core';
import { Mov } from './mov';

@Component({
  selector: 'app-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.css']
})
export class TransitionsComponent implements OnInit {

  mvt: Mov = new Mov();
  mvtList: Mov[] = [];
  receita: number = 0
  despesa: number = 0
  saldo: number = 0

  ngOnInit(): void {
    this.load()
  }


  saveList(form) {
    this.mvtList.push(this.mvt)
    this.save()
    this.mvt = new Mov()
  }

  calc(){
    if (this.mvt.tipo === 'r') {
      this.receita += this.mvt.valor
      this.saldo += this.mvt.valor
    } else {
      this.despesa -= this.mvt.valor
      this.saldo -= this.mvt.valor
    }
  }


  save(){
    const data = JSON.stringify(this.mvtList)
    localStorage.setItem('mvtList', data)
  }

  load(){
    const data = localStorage.getItem('mvtList')
    if (data) {
      this.mvtList = JSON.parse(data)
    }else{
      this.mvtList = []
    }
  }

}
