import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  dados2
  maxValue
  graficoData

  @Input()
  dados

  ngOnInit () {
    // --- parametro
    this.dados2 = [
      {
        mes: 'janeiro',
        receita: 1200,
        despesa: 50
      },
      {
        mes: 'fevereiro',
        receita: 2500,
        despesa: 1500
      },
      {
        mes: 'março',
        receita: 5000,
        despesa: 2500
      }
    ]

    // --- codigo do component de grafico
    this.maxValue = 0

    this.dados2.forEach(item => {
      this.maxValue =
        item.receita > this.maxValue ? item.receita : this.maxValue
      this.maxValue =
        item.despesa > this.maxValue ? item.despesa : this.maxValue
    })

    this.graficoData = this.dados2.map(item => {
      return {
        barra1: (item.receita / this.maxValue) * 100,
        barra2: (item.despesa / this.maxValue) * 100,
        label: item.mes
      }
    })
  }
}
