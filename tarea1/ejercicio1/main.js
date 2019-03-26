import Sueldo from "./Salary.js";
import Employee from "./Employee.js";
class Main {
    constructor() {

        this._salary = new Sueldo(document.querySelector("#sueldos"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () =>
        {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) {
                let trabajador = document.querySelector("#idTrabajador").value;
                let name = document.querySelector("#name").value;
                let sueldo = document.querySelector("#sueldo").value;

                    //poner las fechas como string
                let fechaNacimiento= document.querySelector("#nacimiento").value;
                fechaNacimiento = fechaNacimiento.split("-");
                let fehcaContrata = document.querySelector("#contratacion").value;
                fehcaContrata = fehcaContrata.split("-");
        
                let nacimiento = new Date(fechaNacimiento[0], fechaNacimiento[1] - 1, fechaNacimiento[2]);
                let contratacion = new Date(fehcaContrata[0], fehcaContrata[1] - 1, fehcaContrata[2]);

                let objEmployee = {
                    trabajador: trabajador,
                    name: name,
                    sueldo: sueldo,
                    nacimiento: nacimiento,
                    contratacion: contratacion,
                }

                let employee = new Employee(objEmployee);
                this._salary.addEmployee(employee);
            }
        })
    }
}
let m = new Main();
