
  let nombre=prompt("Ingrese su nombre");
  const lista=
   <div>
       <h1>Bienvenid@ {nombre}</h1>
       <h2>Lista de Productos</h2>
       <ul>
           <li>hamburguesas</li>    
           <li>Salchipapas</li>    
           <li>Pizzas</li>    
       </ul>
   </div>
  ReactDOM.render(lista,document.getElementById("root"))