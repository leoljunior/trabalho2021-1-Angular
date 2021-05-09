export class Mov {
    tipo: string
    descricao: string
    valor: number
    total: number
    
    constructor(tipo?: string, descricao?: string, valor?: number, total?: number){
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
        this.total = total
    }
}