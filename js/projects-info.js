$.getJSON("../assets/projectos.JSON", function(json) {

    //Averiguar cuantos proyectos hay al momento
    var cantidadDeProyectos = json.projectos.length;
    var indiceUltimoProyecto = cantidadDeProyectos-1;

    //conseguir el proyecto actual
    var proyectoActualId = $('.contenido-pagina').attr("data-numero-proyecto");
    var proyectoActualIndex = json.projectos.findIndex(x => x.id === proyectoActualId);
    var proyectoActual = json.projectos[proyectoActualIndex];


    //conseguir el proyecto siguiente
    //me fijo si el proyecto actual es el ultimo porque en ese caso el siguiente sera el primero
    if (proyectoActualIndex === indiceUltimoProyecto){
        var proyectoSiguiente = json.projectos[0];
    } else{
        var proyectoSiguienteIdN = parseInt(proyectoActualId, 10) + 1;
        if(proyectoSiguienteIdN>=10){
            var proyectoSiguienteId = proyectoSiguienteIdN.toString();
            var proyectoSiguienteIndex = json.projectos.findIndex(x => x.id === proyectoSiguienteId);
            var proyectoSiguiente = json.projectos[proyectoSiguienteIndex]; 
        }else{
            var proyectoSiguienteId = "0"+proyectoSiguienteIdN.toString();
            var proyectoSiguienteIndex = json.projectos.findIndex(x => x.id === proyectoSiguienteId);
            var proyectoSiguiente = json.projectos[proyectoSiguienteIndex];
        }
    }


    //conseguir el proyecto anterior
    //me fijo si el proyecto actual es el primero porque en ese caso el anterior sera el ultimo
    if (proyectoActualIndex === 0){
        var proyectoAnterior = json.projectos[indiceUltimoProyecto];
    } else{
        var proyectoAnteriorIdN = parseInt(proyectoActualId, 10) - 1;
        if(proyectoAnteriorIdN>=10){
            var proyectoAnteriorId = proyectoAnteriorIdN.toString();
            var proyectoAnteriorIndex = json.projectos.findIndex(x => x.id === proyectoAnteriorId);
            var proyectoAnterior = json.projectos[proyectoAnteriorIndex];
        }else{
            var proyectoAnteriorId = "0"+proyectoAnteriorIdN.toString();
            var proyectoAnteriorIndex = json.projectos.findIndex(x => x.id === proyectoAnteriorId);
            var proyectoAnterior = json.projectos[proyectoAnteriorIndex];
        }
    }

    // Escribir los datos que corresponden segun el proyecto en le que me encuentro
        //proyecto actual
        $('.imagen-bg').css('background-image', 'url('+proyectoActual.Imagen+')'); 

        //proyecto Anterior
        var link = document.getElementById("linkProyectoAnterior");
        link.setAttribute("href", proyectoAnterior.Link);
        $('#titulo-proyecto-anterior').text(proyectoAnterior.Titulo);
        $('#titulo-proyecto-anterior').attr("data-glitch", proyectoAnterior.Titulo);

        //proyecto Siguiente
        var link = document.getElementById("linkProyectoSiguiente");
        link.setAttribute("href", proyectoSiguiente.Link);
        $('#titulo-proyecto-siguiente').text(proyectoSiguiente.Titulo);
        $('#titulo-proyecto-siguiente').attr("data-glitch", proyectoSiguiente.Titulo);

});

