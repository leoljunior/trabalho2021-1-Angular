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


  ngOnInit(): void {
    this.loadLocal()
  }


  sav(form) {

    if (this.mvt.tipo === 'receita') {
      this.mvt.receita = this.mvt.valor
    } else {
      this.mvt.despesa = this.mvt.valor
    }

    this.mvtList.push(this.mvt)

    console.log(this.mvtList)
    this.saveLocal()
    this.mvt = new Mov()
  }

  rec() {
    let rec = 0
    for (let i = 0; i < this.mvtList.length; i++) {
      rec += this.mvtList[i].receita
    }
    return rec
    console.log(rec)
  }

  desp() {
    let desp = 0
    for (let i = 0; i < this.mvtList.length; i++) {
      desp += this.mvtList[i].despesa
    }
    return desp

  }

  sald() {
    return this.rec() - this.desp()
  }


  saveLocal() {
    const data = JSON.stringify(this.mvtList)
    localStorage.setItem('mvtList', data)
  }

  loadLocal() {
    const data = localStorage.getItem('mvtList')
    if (data) {
      this.mvtList = JSON.parse(data)
    } else {
      this.mvtList = []
    }
  }

}
