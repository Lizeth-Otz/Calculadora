class Display{
    constructor(pantalla){
        this.pantalla = pantalla;
        this.screen = ' ';
        this.calcular = new Calculos(); 
        
    }
    borrarElemento(){
        /*slice: método que devuelve los elementos seleccionados en una matriz, como una nueva matriz
        //acepta números tanto positivos como negativos
        //(num1: la posición del arreglo, num2: si el número es positivo lo quita de izq a der 
        //y si el número es negativo lo quita de der a izq)*/
        this.screen = this.screen.toString().slice(0, -1);
        //console.log(this.screen);
        this.imprimirValor();
    }
    borrarTodo(){
        //replace(): método que devuelve una nueva cadena con los valores reemplazados 
        this.screen = this.screen.replace(this.screen, "");
        //console.log(this.screen);
        this.imprimirValor();
    }
    agregarNumeros(numeros){
        //includes(): método que devuelve 'true' si una matriz contiene un valor especificado
        if (numeros === "." && this.screen.includes(".")) {
            return;
        }
        //toString(): devuelve un número como una cadena
        this.screen = this.screen.toString() + numeros.toString();
        //console.log(this.screen);
        this.imprimirValor();
    }
    imprimirValor(){
        this.pantalla.textContent = this.screen;
    }
}