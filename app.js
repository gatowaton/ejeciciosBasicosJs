//1
alert("Hello World");

//2
const hello = "Hello World"
document.write(hello);

//3
let suma = 3 + 5;
console.log("3 + 5 = " + suma);

//4
const user = prompt("cual es tu nombre?");
const hi = `</br>Hola ${user} como estas.`
document.write(hi);

//5
alert("suma de numeros")
const num1 = parseInt(prompt("primer num"));
const num2 = parseInt(prompt("segundo num"));
console.log(num1 + num2);

//6
alert("se escogera el numero mayor")
const num3 = parseInt(prompt("primer num"));
const num4 = parseInt(prompt("segundo num"));
if(num3 > num4){
    console.log(`${num3} es mayor a ${num4}`);
} else if(num3 == num4){
    console.log("son iguales");
}else{console.log(`${num4} es mayor a ${num3}`);}

const mayor = Math.max(num3, num4);
document.write(`</br>el numero mayor es: ${mayor}`)

//7
alert("escribe 3 numeros, el mayor aparacera en pantalla");
const num5 = parseInt(prompt("num 1"));
const num6 = parseInt(prompt("num 2"));
const num7 = parseInt(prompt("num 3"));
const mayor2 = Math.max(num5, num6, num7);
console.log(`${mayor2} es el mayor de los 3`);

//8
alert("numero divisible por 2");
const num8 = parseInt(prompt("numero a dividir:"));
if(num8 % 2 === 0){
    console.log(`${num8} es divisible por 2`);
}else{ console.log(`${num8} no es divisible por 2`);};

//9
alert("busca letras");
const frase = prompt("frase:");
const letra = prompt("letra a detectar");
const counter = frase.split(letra).length -1;
document.write(`</br>en la frase: ${frase} la letra ${letra} aprace ${counter}`);
