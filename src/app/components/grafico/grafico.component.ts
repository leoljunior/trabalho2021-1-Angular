import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  maxValue
  graficoData

  @Input()
  dados

  ngOnInit () {
  
    this.maxValue = 0

    this.dados.forEach(item => {
      this.maxValue =
        item.recMes > this.maxValue ? item.recMes : this.maxValue
      this.maxValue =
        item.despMes > this.maxValue ? item.despMes : this.maxValue
    })

    this.graficoData = this.dados.map(item => {
      return {
        barra1: (item.recMes / this.maxValue) * 100,
        barra2: (item.despMes / this.maxValue) * 100,
        label: item.label
      }
    })
  }
}
