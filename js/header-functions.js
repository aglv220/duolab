function isNumber(evt) {

    if (evt.shiftKey || evt.ctrlKey || evt.altKey) {
        evt.preventDefault();
    } else {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }        
    }
    return true;
}

function solo_texto(e) {
    especiales = [32];
    caracteres = ["%"];
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    tecla_especial = false;
    if (caracteres.indexOf(tecla) == -1) {
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true; break;
            } else if (key > 96 && key < 123) {
                //LETRAS MINUSCULAS
                tecla_especial = true; break;
            } else if (key > 64 && key < 91) {
                //LETRAS MAYUSCULAS
                tecla_especial = true; break;
            }
        }
    }
    if (!tecla_especial)
        return false;
}

function texto_tildes(e) {
    especiales = [32, 209, 241, 225, 233, 237, 243, 250, 193, 201, 205, 211, 218];
    caracteres = ["%"];
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    tecla_especial = false;
    if (caracteres.indexOf(tecla) == -1) {
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true; break;
            } else if (key > 96 && key < 123) {
                //LETRAS MINUSCULAS
                tecla_especial = true; break;
            } else if (key > 64 && key < 91) {
                //LETRAS MAYUSCULAS
                tecla_especial = true; break;
            }
        }
    }
    if (!tecla_especial)
        return false;
}

function validar_nomcorto(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    caracteres = ["%"];
    especiales = [8, 9, 37, 39, 45, 95];
    tecla_especial = false;
    if (caracteres.indexOf(tecla) == -1) {
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true; break;
            } else if (key > 96 && key < 123) {
                //LETRAS MINUSCULAS
                tecla_especial = true; break;
            } else if (key > 64 && key < 91) {
                //LETRAS MAYUSCULAS
                tecla_especial = true; break;
            }
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function validar_nomlargo(e) {
    especiales = [32,45,95,209,241,225,233,237,243,250,193,201,205,211,218];
    caracteres = ["%"];
    numeros = "0123456789";
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    tecla_especial = false;
    if (caracteres.indexOf(tecla) == -1) {
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true; break;
            } else if (key > 96 && key < 123) {
                //LETRAS MINUSCULAS
                tecla_especial = true; break;
            } else if (key > 64 && key < 91) {
                //LETRAS MAYUSCULAS
                tecla_especial = true; break;
            }
        }
    }
    if (numeros.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function noCopy(e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    }
}

//32 space
//192 ñ

function lettersOnly(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 192))) {
            e.preventDefault();
        }
    }
}

function lettersWhitesSpace(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 192))) {
            e.preventDefault();
        }
    }
}

function noWhitesSpace(e) {
    //if (e.shiftKey || e.ctrlKey || e.altKey) {
    if (e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if ( key == 32 ) {
            e.preventDefault();
        }
    }
}

function allowOnlyNumbersAndOneDot(event) {
    if (((event.which != 46 || (event.which == 46 && $(this).val() == '')) ||
        $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
}

/*$('.classIsNumber').keypress(function (event) {
    isNumber(event);
});*/
