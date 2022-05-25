const Pizzas = [
    {
      id: 0,
      nombre: "Muzzarella",
      ingredientes: ["Muzzarella", "Salsa de tomate"],
      precio: 580
    },
  
    {
      id: 1,
      nombre: "Especial",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Jamón Cocido"],
      precio: 750
    },
  
    {
      id: 2,
      nombre: "Cuatro Quesos",
      ingredientes: [
        "Muzzarella",
        "Gruyere",
        "Roquefort",
        "Parmesano",
        "Salsa de tomate"
      ],
      precio: 800
    },
  
    {
      id: 3,
      nombre: "Calabresa",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"],
      precio: 780
    },
  
    {
      id: 4,
      nombre: "Cebolla",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Cebolla"],
      precio: 700
    },
  
    {
      id: 5,
      nombre: "Lechuga",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"],
      precio: 730
    }
];


const nombrePizza = document.getElementById("nombrePizza");

const precioPizza = document.getElementById("precioPizza");

const button = document.getElementById("button");

const input = document.querySelector('.input');

const btn = document.querySelector('.boton');

const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', e =>{
  e.preventDefault()
})

btn.addEventListener('click', capturarValor);

function capturarValor(){

  let valor = input.value;

  if(valor == 1){
    nombrePizza.textContent = `Pizza ${Pizzas[valor].nombre}`;
    precioPizza.textContent = `Precio: $${Pizzas[valor].precio}`;

  } else if(valor < Pizzas.length && valor >= 0 && valor !=1){
  nombrePizza.textContent = `Pizza de ${Pizzas[valor].nombre}`;
  precioPizza.textContent = `Precio: $${Pizzas[valor].precio}`;
  } else {
    nombrePizza.textContent = `No hay pizzas disponibles para el número ingresado`;
    precioPizza.textContent = "";
  }

}


