import Agenda from "./Agenda.js";
import Gastos from "./Gastos.js";

class main{
    constructor(){
        this._agenda = new Agenda(
            document.querySelector("#tablaGasto"),
            document.querySelector("#tablaInfo")
        );
        
        document.querySelector("#btnAdd").addEventListener("click", () => {
            
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() == true) {
                
                let fecha = document.querySelector("#fecha").value;
                fecha = fecha.split("-");
                fecha = new Date(fecha[0], fecha[1]-1, fecha[2]);
                
                
                let tipo = document.querySelector("#tipo").value;
    
                let concepto = document.querySelector("#concepto").value;
        
                let cantidad = document.querySelector("#monto").value;

                let objGasto = {
                    fecha: fecha,
                    tipo: tipo,
                    concepto: concepto,
                    cantidad: cantidad
                };

                let cost = new Gastos(objGasto);
                
                this._agenda.addGasto(cost);
            }
        });
    }
}

let m = new main();