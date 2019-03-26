import Employee from "./Employee.js";
 //localStorage.removeItem("employees")= BORRAR

export default class Sueldo {
    constructor(tablasueldo, tablainfo) {
        this._tablasueldo = tablasueldo;
        this._tablainfo = tablainfo;

            //variables localstorage
        this._employees = [];
        this._initTable();
        
        //variable de conteo de sueldo
        this._countP = 0;
        this._countM = 0;
        this._countG = 0;
        this._countSalary = 0;
        this._countEmpleados = 0;

        //variables de edad y cantidad de trabajadores
        this._edad = 0;
        this._ageArrive = 0;
        this._trabajadores = 0;

    }

    _initTable() {
        let employees = JSON.parse(localStorage.getItem("employees"));
        if(employees === null)
        {
            return ;
        }
        employees.forEach((employee, index) => 
        {
            employee.fechaNaci = new Date(employee.fechaNaci);
            employee.contratacion = new Date(employee.contratacion);
            this._showInTable(new Employee(employee));
        });
    }
    _showInTable(employee) 
    {
        let row = this._tablasueldo.insertRow(-1);
        let cellIdTrabajador = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellFechaNacimiento = row.insertCell(2);
        let cellFechaContratacion = row.insertCell(3);
        let cellSueldo = row.insertCell(4);
        let cellAge = row.insertCell(5);
        let cellAntiguedad = row.insertCell(6);

        cellIdTrabajador.innerHTML = employee.trabajador;
        cellName.innerHTML = employee.nombre;
        cellFechaNacimiento.innerHTML = employee.getFechaNacimientoAsString() ;
        cellFechaContratacion.innerHTML = employee.getFechaContratacionAsString();
        cellSueldo.innerHTML = employee.sueldo;
        cellAge.innerHTML = employee.getAge();
        cellAntiguedad.innerHTML = employee.getAntiguedad();

        let sueldo = employee.sueldo;
        let ageArrive = employee.getAge();
        let sueldoPromedio = 0;

        //Salarios
        if (sueldo <= 10000) {
            this._countP++;
            this._countSalary = Number(this._countSalary) + Number(sueldo);
            this._contadorEmpleados++;
        } else if (sueldo <= 20000) {
            this._countM++;
            this._countSalary = Number(this._countSalary) + Number(sueldo);
            this._contadorEmpleados++;
        } else if (sueldo > 20000) {
            this._countG++;
            this._countSalary = Number(this._countSalary) + Number(sueldo);
            this._contadorEmpleados++;
        } 
            salaryArrive =  this._countSalary / this._contadorEmpleados;
        
            //sacar ageArrive
        this._edad += Number(ageArrive);
        this._trabajadores++;
        this._ageArrive = this._edad / this._trabajadores;

        //tabla de trabajadores
        this._tablainfo.rows[1].cells[1].innerHTML = this._countP;
        this._tablainfo.rows[2].cells[1].innerHTML = this._countM;
        this._tablainfo.rows[3].cells[1].innerHTML = this._countG;
        this._tablainfo.rows[4].cells[1].innerHTML = salaryArrive;
        this._tablainfo.rows[5].cells[1].innerHTML = this._ageArrive;

        let objEmployee = {
            trabajador: employee.trabajador,
            name: employee.name,
            sueldo: employee.sueldo,
            nacimiento: employee.fechaNaci,
            contratacion: employee.contratacion
        }
        this._employees.push(objEmployee);
    }
    addTrabajador(employee) 
    {
        this._showInTable(employee);
        localStorage.setItem("employees", JSON.stringify(this._employees));
    }
}