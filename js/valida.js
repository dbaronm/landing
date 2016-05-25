document.formu.addEventListener('submit', validarFormulario);
function validarFormulario(evObject) {
	evObject.preventDefault();//Evita el envío de otro formulario
	var nom=document.getElementById('nombre').value;
	var mail=document.getElementById('correo').value;
	var tel=document.getElementById('telefono').value;
	var dia=document.getElementById('dia').value;
	var mes=document.getElementById('mes').value;
	var ano=document.getElementById('ano').value;
	if (nom == "" ) {
    	alert("Verifica el usuario")
    	return false;
	}
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(mail)) {
        alert("Error: La dirección de correo " + mail + " no es válida.");
        return false;
	}
	if (!/^([0-9])*$/.test(tel)) {
    	alert("El valor " + tel + " no es un número válido");
    	return false;
	}
	if (dia > 31 || dia < 0) {
    	alert( "Dia incorrecto");
    	return false;
	}
	if (mes > 12 || mes < 0) {
    	alert("Mes incorrecto");
    	return false;
	}
	if (ano > 2016 || ano < 1900) {
    	alert("Año incorrecto");
    	return false;
	}
	var d = new Date();
	var m = d.getMonth();
	var da = d.getDate();
	var n = d.getFullYear();
	var edad = n-ano;
	alert(edad);
	if (edad = 18) {
		if (mes >= m) {
			if (dia >= da) {
				edad = 18;
			}else { 
				edad = 17;
			}
		} else {
			edad = 17;
		}
	}
	if (edad >= 18) {
		alert("Mayor de edad");
	} else if (edad < 18){
		alert("Menor de edad");
	}
	document.formu.method='Post/Get';
	document.formu.method='valida.html';
	document.formu.submit();
}