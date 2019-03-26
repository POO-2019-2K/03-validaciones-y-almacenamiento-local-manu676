export default class Employee
{
    constructor(employee)
    {
        this._nombre = employee.nombre;
        this._trabajador = employee.trabajador;
        this._sueldo = employee.sueldo;
        this._birthday = employee.birthday;
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
    get birthday()
    {
        return this._birthday;
    }
    get contratacion()
    {
        return this._contratacion;
    }
        //Fechas a string 
    getFechaNacimientoAsString() 
    {
        let n = this._birthday.getDate() + "/" + 
        this._months[this._birthday.getMonth()] + "/" + 
        this._birthday.getFullYear();

        return n ;
    }
    getFechaContratacionAsString() 
    {
        let c = this._contratacion.getDate() + "/" + 
        this._months[this._contratacion.getMonth()] + "/" + 
        this._contratacion.getFullYear();
        
        return c;
    }
        //retornos de fechas
    getAge()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - Date(this._birthday);
        return Math.round(differenceMs / oneyears);
    }
    getAntiguedad()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - this._contratacion;
        return Math.round(differenceMs / oneyears);
    }

}