var input = document.querySelector("#nombre");
var outputs = document.querySelector("#outputs");
var StringIn = "";
var StringOut = "";

var button = document.querySelector("button");




button.addEventListener("click", clickHandler, false);

function clickHandler() {

    StringIn = input.value;


    if (StringIn == "info") {

        StringOut = "Digita el nombre de tu carrera. Sistemas, Contabilidad o Mercadeo"

    } else if (StringIn == "sistemas") {

        StringOut = "La Ingeniería en Sistemas es una carrera dedicada a la formación de profesionales que posean un sólido fundamento científico"

    } else if (StringIn == "contabilidad") {

        StringOut = "La contabilidad es una disciplina que se encarga de estudiar, medir y analizar el patrimonio"

    } else if (StringIn == "mercadeo") {

        StringOut = "es el proceso de exploración, creación y entrega de valor para satisfacer las necesidades de un mercado objetivo"

    } else if (StringIn == "carreras") {

        StringOut = "las carreras disponibles son: Ingenieria en sistemas, Contabilidad y Mercadeo"
        

    } else if (StringIn == "costo sistemas") {

        StringOut = "La matricula tiene un precio de: $50.00 mas el curso $30.00 con un total de: $80.00"

    } else if (StringIn == "costo mercadeo") {

        StringOut = "La matricula tiene un precio de: $60.00 mas el curso $30.00 con un total de: $90.00"

    } else if (StringIn == "costo contabilidad") {

        StringOut = "La matricula tiene un precio de: $60.00 mas el curso $25.000 con un total de: $85.00"

    } else if (StringIn == "fecha cursos") {

        StringOut = "Sistemas inicia el 20 de agosto, contabilidad el 15 de agosto y mercadeo el 1 de diciembre"

    } else if (StringIn == "info rifa") {

        StringOut = "La rifa Agape se realizara el dia 24 de diciembre y el premio es una moto con un valor de $5,000.00 dolares"
    
    }   
    else if(StringIn){

        StringOut = "Hola" + "\n" + StringIn + "\n" + "Como puedo ayudarte";

    }





    outputs.innerHTML = StringOut;
    input.value = "";
    input.focus();




}
