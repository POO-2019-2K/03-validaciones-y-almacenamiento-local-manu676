export default class Gasto{
    constructor(gasto){
        this._fechaGasto = gasto.fechaGasto;
        this._tipo = gasto.tipo;
        this._concepto = gasto.concepto;
        this._cantidad = Number(gasto.cantidad)
    }
    getFechaGastoString(){
        let G = this._fechaGasto.toString().split(' ');
        return fechaGasto[0] + "/ " + fechaGasto[1] +"-"+ fechaGasto[2] + "-" + fechaGasto[3];
    }
    get fechaGasto(){
        return this._fechaGasto
    }
    get tipo(){
        return this._tipo
    }
    get concepto(){
        return this._concepto
    }
    get cantidad(){
        return this._cantidad
    }
}