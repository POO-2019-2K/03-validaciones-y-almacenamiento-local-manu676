export default class Consulta
{
    constructor(consult)
    {
        this._nombre = consult.nombre;
        this._hora = consult.gettime();
        this._fechaCita = consult.fechaCita;
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
        this._dias = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado"
        ];
    }
        //lectura de consult
    get nombre()
    {
        return this._nombre;
    }
    get hora()
    {
        return this._hora.gettime();
    }
    get fechaCita()
    {
        return this._fechaCita;
    }
        //Fechas a string 
    getFechaLlegadaAsString() 
    {
        let fechaNaci = this._fechaNaci.getDate() + "/" + this._months[this._fechaNaci.getMonth()] + "/" + this._fechaNaci.getFullYear();
        return fechaNaci;
    }
    getCita()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - this._fechaCita;
        return Math.round(differenceMs / oneyears);
    }
}