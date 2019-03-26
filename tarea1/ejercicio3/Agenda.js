import Gasto from "./Gasto.js";

export default class Agenda{
    constructor(tablaGasto, tablaInfo){
        this._tablaGasto = tablaGasto;
        this._tablaInfo = tablaInfo;

            //tipos de gastos
        this._gastoT = 0;
        this._gastoH = 0;
        this._gastoA = 0;
        this._otrosGastos = 0;
        this._gastos = [];
        this._initTable();

    }

    _initTable(){
        if (localStorage.getItem("gastos")) {
            this._gasto = JSON.parse(localStorage.getItem("gastos"));
            
            this._gasto.forEach( (gasto, index) => {
                console.log(gasto);
                
                gasto.fecha = new Date(gasto.fecha);
                
                this.showInTable(new Gasto(gasto));                
            });
        };
    }

    addGasto(gastar){        
        let objGasto = {
            fecha: gastar._fechaGasto,
            tipo: gastar._tipo,
            concepto: gastar._concepto,
            monto: gastar._cantidad
        };
        
        this._gastos.push(objGasto);

        localStorage.setItem("gastos", JSON.stringify(this._gastos));
        
         this.showInTable(gasto);
    }

    showInTable(gastar){
        
        let row = this._tablaGasto.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellConcepto = row.insertCell(2);
        let cellMonto = row.insertCell(3);
        
        cellFecha.innerHTML = gastar.getFechaGastoString();
        cellTipo.innerHTML = gastar._tipo;
        cellConcepto.innerHTML = gastar._concepto;
        cellMonto.innerHTML = gastar._monto;

        switch (gastar._tipo) {
            case "Transporte":
                this._gastoT += gastar._monto;
                break;
            case "Hospedaje":
                this._gastoH += gastar._monto;
                break;
            case "Alimentos":
                this._gastoA += gastar._monto;
                break;
            case "Otros":
                this._otrosGastos += gastar._monto;
                break;
            default:
                break;
        }

        this._tablaInfo.rows[1].cells[1].innerHTML = this._gastoT;
        this._tablaInfo.rows[2].cells[1].innerHTML = this._gastoH;
        this._tablaInfo.rows[3].cells[1].innerHTML = this._gastoA;
        this._tablaInfo.rows[4].cells[1].innerHTML = this._otrosGastos;
    }


} 