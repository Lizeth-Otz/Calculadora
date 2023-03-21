const pantalla = document.getElementById("screen");
//querySelectorAll --> es un método que devuelve todos los elementos que coinciden con un selector css
const bnOperadores = document.querySelectorAll('.operador'); 
const bnNumeros = document.querySelectorAll('.numero');

const display = new Display(pantalla);
bnNumeros.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumeros(boton.innerHTML));
});

/*
let calcular = new Calculos();
console.log(calcular.sumar(2,3));
console.log(calcular.restar(2,3));
console.log(calcular.dividir(2,3));
console.log(calcular.multiplicar(2,3));*/