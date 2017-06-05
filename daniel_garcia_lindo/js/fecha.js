 function fechaHoy() {
        let hoy = new Date();
        let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    document.querySelector("#fecha1").innerHTML = "Hoy es " + " " + dias[hoy.getDay()] + " " + "dia" + " " + hoy.getDate() + " " + "de" + " " + meses[hoy.getMonth()] + " " + "del año" + " " + hoy.getFullYear();
};
fechaHoy();