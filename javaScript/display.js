class Display{
    constructor(pantalla){
        this.pantalla = pantalla;

        this.calcular = new Calculos(); 
        this.tipoOperacion = undefined;
        this.screen = ' ';
        this.valorAnterior = ' ';
        this.valorAnterior = ' ';
        this.signos = {sumar: "+", restar: "-", dividir: "/", multiplicar: "x"}
        
    }
    borrarElemento(){
        /*slice: método que devuelve los elementos seleccionados en una matriz, como una nueva matriz
        //acepta números tanto positivos como negativos
        //(num1: la posición del arreglo, num2: si el número es positivo lo quita de izq a der 
        //y si el número es negativo lo quita de der a izq)*/
        this.screen = this.screen.toString().slice(0, -1);

        this.imprimirValor();
    }
    borrarTodo(){
        this.screen = ' ';
        this.valorAnterior = ' ';
        this.tipoOperacion = undefined;
        this.imprimirValor();
    }
    tipoOperador(tipo){ 
        this.tipoOperacion !== "igual" && this.calculoTotal();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.screen || this.valorAnterior;
        this.screen = '';
        this.imprimirValor();
    }
    agregarNumeros(numeros){
        //includes(): método que devuelve 'true' si una matriz contiene un valor especificado
        if (numeros === "." && this.screen.includes(".")) {
            return;
        }
        //toString(): devuelve un número como una cadena
        this.screen = this.screen.toString() + numeros.toString();
        this.imprimirValor();
    }
    imprimirValor(){ 
        this.pantalla.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} ${this.screen}`;
    }

    calculoTotal(){
        const valorAnt = parseFloat(this.valorAnterior);
        const valorAct = parseFloat(this.screen);
        if (isNaN(valorAnt) || isNaN(valorAct)) {
            return;
        }
        if (this.tipoOperacion === "dividir") {
            this.screen = this.calcular[this.tipoOperacion](valorAnt, valorAct).toFixed(6);
        } else {
            this.screen = this.calcular[this.tipoOperacion](valorAnt, valorAct);
        }
        

    }
}