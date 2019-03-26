export default class Employee
{
    constructor(employee)
    {
        this._nombre = employee.nombre;
        this._trabajador = employee.trabajador;
        this._sueldo = employee.sueldo;
        this._fechaNaci = employee.fechaNaci;
        this._contratacion = employee.contratacion;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }
        //lectura de employee
    get nombre()
    {
        return this._nombre;
    }
    get trabajador()
    {
        return this._trabajador;
    }
    get sueldo()
    {
        return this._sueldo;
    }
    get nacimiento()
    {
        return this._nacimiento;
    }
    get contratacion()
    {
        return this._contratacion;
    }
        //Fechas a string 
    getFechaNacimientoAsString() 
    {
        let fechaNaci = this._fechaNaci.getDate() + "/" + this._months[this._fechaNaci.getMonth()] + "/" + this._fechaNaci.getFullYear();
        return fechaNaci;
    }
    getFechaContratacionAsString() 
    {
        let fechaContra = this._contratacion.getDate() + "/" + this._months[this._contratacion.getMonth()] + "/" + this._contratacion.getFullYear();
        return fechaContra;
    }
        //retornos de fechas
    getAge()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - this._nacimiento;
        return Math.round(differenceMs / oneyears);
    }
    getAntiguedad()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - this._contratacion;
        return Math.round(differenceMs / oneyears);
    }

}